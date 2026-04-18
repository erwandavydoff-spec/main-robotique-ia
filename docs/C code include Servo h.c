// C++ code
//
#include <Servo.h>
Servo servo1;
Servo servo2;
Servo servo3;
Servo servo4;
Servo servo5;
void setup()
{
  servo1.attach (5);
  servo2.attach (6);
  servo3.attach (9);
  servo4.attach (10);
  servo5.attach (11);
  Serial.begin (9600);
}
void loop()
{
  int flex_sensor1 = analogRead (A4);
  int flex_sensor2 = analogRead (A3); //flex_sensor()=();
  int flex_sensor3 = analogRead (A2);
  int flex_sensor4 = analogRead (A1);
  int flex_sensor5 = analogRead (A0);

  flex_sensor1 = map (flex_sensor1, 863, 510, 0, 180);
  flex_sensor2 = map (flex_sensor2, 863, 510, 0, 180);
  flex_sensor3 = map (flex_sensor3, 863, 510, 0, 180);
  flex_sensor4 = map (flex_sensor4, 863, 510, 0, 180);
  flex_sensor5 = map (flex_sensor5, 863, 510, 0, 180);

  servo1.write (flex_sensor1);
  servo2.write (flex_sensor2);
  servo3.write (flex_sensor3);
  servo4.write (flex_sensor4);//:0
  servo5.write (flex_sensor5);

  Serial.println (flex_sensor1);
  Serial.println (flex_sensor2);
  Serial.println (flex_sensor3);
  Serial.println (flex_sensor4);
  Serial.println (flex_sensor5);

  delay (250);
}
