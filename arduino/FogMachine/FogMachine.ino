/* FogMachine.ino
   MIT License (c) Faure Systems <dev at faure dot systems>

   SD card module   Arduino Uno     Arduino Mega
      VCC             3.3V or 5V      3.3V or 5V (check module’s datasheet)
      CS              4               53
      MOSI            11              51
      CLK             13              52
      MISO            12              50
      GND             GND             GND
*/

#include <SPI.h>
#include "SD.h"
#include <Ethernet.h>
#include <IPAddress.h>
#include "lib.h"

String ip = "192.168.1.201"; //<<< ENTER YOUR IP ADDRESS HERE

const uint8_t SD_CS_PIN = 4;    // SD card chip select pin

const uint8_t PIN_POWER = A0;
const uint8_t PIN_FOG = A1;

EthernetServer server(80);       // create a server at port 80

struct state_t state = {
  0,
  { 10, 3, 5, 15 },
  { 0, 0, 0}
};

Sequence sequence(PIN_FOG);

File settingsFile;
String recv_str;
byte mac[6];

void setup()
{
  Serial.begin(9600); // for debugging

  IPAddress ipa;
  if (ipa.fromString(ip)) {
    safe_mac(mac, ip.substring(ip.lastIndexOf('.') + 1).toInt());
    Ethernet.begin(mac, ipa);
  } else {
    Serial.print(F("Invalid IP address: "));
    Serial.println(ip);
    while (true) {
      delay(1); // do nothing, no point running without valid IP address
    }
  }

  // Check for Ethernet hardware present
  if (Ethernet.hardwareStatus() == EthernetNoHardware) {
    Serial.println("Ethernet shield was not found.  Sorry, can't run without hardware. :(");
    while (true) {
      delay(1); // do nothing, no point running without Ethernet hardware
    }
  }

  Serial.print(F("IP address: "));
  Serial.println(Ethernet.localIP());

  Serial.print(F("Initializing SD card..."));
  delay(1500);

  if (SD.begin(SD_CS_PIN)) {
    Serial.println(F("initialization done."));
    state.sd = 1;
  } else {
    Serial.println(F("initialization failed!"));
  }
  /*
    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.
    myFile = SD.open("test.txt", FILE_WRITE);

    // if the file opened okay, write to it:
    if (myFile) {
      Serial.print("Writing to test.txt...");
      myFile.println("testing 1, 2, 3.");
      // close the file:
      myFile.close();
      Serial.println("done.");
    } else {
      // if the file didn't open, print an error:
      Serial.println("error opening test.txt");
    }

    // re-open the file for reading:
    myFile = SD.open("test.txt");
    if (myFile) {
      Serial.println("test.txt:");

      // read from the file until there's nothing else in it:
      while (myFile.available()) {
        Serial.write(myFile.read());
      }
      // close the file:
      myFile.close();
    } else {
      // if the file didn't open, print an error:
      Serial.println("error opening test.txt");
    }


  */

  server.begin();           // start to listen for clients

  pinMode(PIN_POWER, OUTPUT);
  pinMode(PIN_FOG, OUTPUT);

  digitalWrite(PIN_POWER, state.machine.power);
  digitalWrite(PIN_FOG, state.machine.fog);

  sequence.configure(&state.settings);
}

void loop()
{
  // Listen controller: reply state or do stuff
  EthernetClient client = server.available();  // try to get client

  if (client) {
    ////Serial.println("--new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    recv_str = "";
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        recv_str += c;
        ////Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          if (recv_str.startsWith(F("GET / "))) {
            ////Serial.println(F("200 - OK"));
            writeResponse(client, 200, &String(stateResponse()));
          } else if (recv_str.startsWith(F("GET /fog/"))) {
            if (recv_str.startsWith(F("GET /fog/1"))) {
              state.machine.fog = 1;
            } else { // GET /machine/fog/0
              state.machine.fog = 0;
            }
            digitalWrite(PIN_FOG, state.machine.fog);
            Serial.println(F("200 - OK"));
            writeResponse(client, 200, &String(stateResponse()));
          } else if (recv_str.startsWith(F("GET /power/"))) {
            if (recv_str.startsWith(F("GET /power/1 "))) {
              state.machine.power = 1;
            } else { // GET /machine/power/
              state.machine.power = 0;
            }
            digitalWrite(PIN_POWER, state.machine.power);
            Serial.println(F("200 - OK"));
            writeResponse(client, 200, &String(stateResponse()));
          } else if (recv_str.startsWith(F("GET /sequence/"))) {
            if (recv_str.startsWith(F("GET /sequence/1 "))) {
              state.machine.sequence = 1;
              sequence.start();
            } else { // GET /machine/sequence/
              if (state.machine.sequence == 1) {
                state.machine.sequence = 0;
                digitalWrite(PIN_FOG, LOW);
                sequence.stop();
              }
            }
            Serial.println(F("200 - OK"));
            writeResponse(client, 200, &String(stateResponse()));
          } else if (recv_str.startsWith(F("GET /settings/"))) {
            int data_end = recv_str.indexOf(' ', 14);
            if (data_end > 14) {
              setSettings(recv_str.substring(14, data_end));
            }
            Serial.println(F("200 - OK"));
            writeResponse(client, 200, &String(stateResponse()));
          } else {
            Serial.println(F("404 - NOT FOUND"));
            writeResponse(client, 404);
          }
          break;
        }
        if (c == '\n') {
          // you're starting a new line
          currentLineIsBlank = true;
        } else if (c != '\r') {
          // you've gotten a character on the current line
          currentLineIsBlank = false;
        }
      }
    }
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    ////Serial.println("--client disconnected");
  } // end if (client)

  sequence.update();
}

void readState() {
  state.machine.power = digitalRead(PIN_POWER);
  state.machine.fog = digitalRead(PIN_FOG);
}

String stateResponse() {
  readState();
  String str;
  str += String(state.settings.t1, DEC);
  str += '|';
  str += String(state.settings.n, DEC);
  str += '|';
  str += String(state.settings.t2, DEC);
  str += '|';
  str += String(state.settings.t3, DEC);
  str += '|';
  str += String(state.machine.power, DEC);
  str += '|';
  str += String(state.machine.fog, DEC);
  str += '|';
  str += String(state.machine.sequence, DEC);
  str += '|';
  str += String(state.sd, DEC);
  return str;
}

void setSettings(String str) {
  int u = 0;
  int v = str.indexOf(',');
  if (v > u) {
    state.settings.t1 = str.substring(u, v).toInt();
  }
  u = v + 1;
  v = str.indexOf(',', u);
  if (v > u) {
    state.settings.n = str.substring(u, v).toInt();
  }
  u = v + 1;
  v = str.indexOf(',', u);
  if (v > u) {
    state.settings.t2 = str.substring(u, v).toInt();
  }
  u = v + 1;
  if (u < str.length()) {
    state.settings.t3 = str.substring(u).toInt();
  }
  sequence.configure(&state.settings);
}
