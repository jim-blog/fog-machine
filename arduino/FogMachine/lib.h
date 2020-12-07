/**
   MIT License (c) Faure Systems <dev at faure dot systems>
*/
#ifndef fog_machine_lib_h
#define fog_machine_lib_h

struct settings_t {
  int t1;
  int n;
  int t2;
  int t3;
};

struct machine_t {
  int power;
  int fog;
  int sequence;
  int count;
};

struct state_t {
  int sd;
  struct settings_t settings;
  struct machine_t machine;
};

enum SequenceState { IDLE = 0, T1, T2, T3 };

void safe_mac(byte *mac, uint8_t s = 1) {
  /*
      Locally Administered Address Ranges that can be used on your network
      without fear of conflict:
      x2-xx-xx-xx-xx-xx
      x6-xx-xx-xx-xx-xx
      xA-xx-xx-xx-xx-xx
      xE-xx-xx-xx-xx-xx
  */
  mac[0] = 0x72;
  mac[1] = 0xAA;
  mac[2] = 0x00;
  mac[3] = 0x00;
  mac[4] = 0x00;
  mac[5] = s;
}

void writeResponse(Stream & client, int code, String *response = NULL) {
  if (code == 200) {
    client.println(F("HTTP/1.0 200 OK"));
    if (response) {
      //Serial.print(F("Content-Length: "));
      //Serial.println(strlen(response->c_str()));
      Serial.print(F("Sending: "));
      Serial.println(response->c_str());
      client.println(F("Content-Type: text/plain"));
      //client.print(F("Content-Length: "));
      client.println(F("Connection: close"));
      client.println();
      //client.println(response->length());
      client.print(response->c_str());
    } else {
      client.println(F("Content-Type: text/html"));
      client.println(F("Connection: close"));
    }
  } else {
    // send a 404 Not Found
    client.println(F("HTTP/1.1 404 Not Found"));
    client.println(F("Content-Type: text/html"));
    client.println(F("Connnection: close"));
    client.println();
    client.println(F("PAGE NOT FOUND"));
  }
}

class Sequence {

    // T1: pause in between two burst --> chnage in JS

  public:
    enum STATE { IDLE = 0, T1, T2, T3 };
    Sequence(const uint8_t pin) {
      _active = false;
      _pin = pin;
    };
    void configure(settings_t *settings) {
      _t1 = settings->t1;
      _n = settings->n;
      _t2 = settings->t2;
      _t3 = settings->t3;
    };
    void start() {
      _count = _n;
      digitalWrite(_pin, HIGH);
      _state = T2;
      _timeout = timeout(millis(), _t2 * 1000);
      _active = true;
      Serial.print(F("->Count: "));
      Serial.println(_count);
      Serial.print(F("State: "));
      Serial.println(_state);
      Serial.print(F("timeout-now = "));
      int x = _timeout - millis();
      Serial.println(x);
    };
    void stop() {
      _active = false;
    };
    void update() {
      if (!_active) return;
      if (millis() < _timeout) return;
      if (_state == T2) {
        --_count;
        if (_count == 0) {
          _count = _n;
          digitalWrite(_pin, LOW); // already LOW ...
          _state = T1;
          _timeout = timeout(millis(), _t1 * 60 * 1000);
        } else {
          digitalWrite(_pin, LOW);
          _state = T3;
          _timeout = timeout(millis(), _t3 * 1000);
        }
      } else if (_state == T3) {
        digitalWrite(_pin, HIGH);
        _state = T2;
        _timeout = timeout(millis(), _t2 * 1000);
      } else if (_state == T1) {
        digitalWrite(_pin, HIGH);
        _state = T2;
        _timeout = timeout(millis(), _t2 * 1000);
      }
      Serial.print(F("->Count: "));
      Serial.println(_count);
      Serial.print(F("State: "));
      Serial.println(_state);
      Serial.print(F("timeout-now = "));
      int x = _timeout - millis();
      Serial.println(x);
    };
    unsigned long timeout(unsigned long start, unsigned long period) {
      unsigned long stop;
      if (((2 ^ 32 - 1) - start) < period) { // unsigned long overflow
        unsigned long delta = (2 ^ 32 - 1) - start;
        stop = period - delta;
      } else {
        stop = start + period;
      }
      return stop;
    };

  private:
    int _t1;
    int _n;
    int _t2;
    int _t3;
    uint8_t _pin;

    unsigned long _timeout;
    uint8_t _count;
    bool _active;

    STATE _state;
};

#endif  // fog_machine_lib_h
