/* StackOverflow.ino
   MIT License (c) Faure Systems <dev at faure dot systems>
*/

#include "FreeStack.h"

void setup()
{
  Serial.begin(9600);       // for debugging

  Serial.print(F("FreeStack (max for Uno: 2048, with Serial: 1853): "));
  Serial.println(FreeStack());

  unsigned long n = 40;
  Serial.println(String("Call factorial(n) with n=") + String(n, DEC));
  unsigned long y = factorial(n);
  Serial.println(String(n, DEC) + "! = " + String(y, DEC));
}

void loop()
{
  Serial.println("-- loop");
  delay(1000);
  unsigned long n = 5;
  Serial.println(String("Call factorial(n) with n=") + String(n, DEC));
  unsigned long y = factorial(n);
  Serial.println(String(n, DEC) + "! = " + String(y, DEC));
}

unsigned long factorial(unsigned long n) {
  String buf = "Store something on stack";
  String str;
  for (int i = 0; i < buf.length(); i++) {
    str[i] = buf[i];
  }
  Serial.print(F("FreeStack (max for Uno: 2048, with Serial: 1853): "));
  Serial.println(FreeStack());
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
