// stałe opisujące silniki
#define R_PWM 11
#define R_DIR 12
#define L_PWM 10
#define L_DIR 13
#define L_MOTOR 0
#define R_MOTOR 1
#define PWM_MAX 255

 // stałe opisujące piny sensorów
#define SENSOR_START 2
#define SENSOR_COUNT 8

#define HISTORY_SIZE 100

struct History 
{
  int iter;
  int filled;
  int sum;
  double history[HISTORY_SIZE];
};

int sensors[SENSOR_COUNT];
struct History lastErr = {0,0,0};
void historyPush(double val);

void setMotorSpeed(int motor, int speed);
void readSensors();
void clearSensors();
double calculateError();

 void setup()
{
  // setup code here
  pinMode(L_DIR, OUTPUT);
  pinMode(L_PWM, OUTPUT);
  pinMode(R_DIR, OUTPUT);
  pinMode(R_PWM, OUTPUT);

   for(int i = SENSOR_START; i < SENSOR_START + SENSOR_COUNT; i++)
  {
    pinMode(i, INPUT);
  }

    Serial.begin(9600); // opens serial port, sets data rate to 9600 bps
}

 void loop()
{
  // run code here
  readSensors();
  Serial.print("f|");
  printSensors();

  clearSensors();
//  printSensors();

   int speed = 50; // todo dodać przyspieszanie na prostch
  double turn = calculateError();

printMotors(speed, turn);

//setMotorSpeed(L_MOTOR, 90);
//  setMotorSpeed(R_MOTOR, 90);
   setMotorSpeed(L_MOTOR, speed + (int)turn);
  setMotorSpeed(R_MOTOR, speed - (int)turn);
}

 double sensorMiddle = (double)(SENSOR_COUNT - 1) / 2;
double kp = 10;
double Ti = 1;
double Td = 1;
double calculateError()
{
  double errorValue = 0.0;

   for(int i = 0; i < SENSOR_COUNT; i++)
  {
    errorValue += (double)sensors[i] * ((double)i - sensorMiddle);
  }

   historyPush(errorValue); 

   double integral = lastErr.sum / lastErr.filled;

   int prevIter = (lastErr.iter - 1) % HISTORY_SIZE;
  if(prevIter < 0) prevIter += HISTORY_SIZE;
  double derivative = lastErr.history[lastErr.iter] - lastErr.history[prevIter];

   return kp * (errorValue + (Ti * integral) + (Td * derivative));
}


void printSensors()
{
  for(int i = SENSOR_START; i < SENSOR_START + SENSOR_COUNT; i++)
  {
    Serial.print(sensors[i - SENSOR_START]);  
  }
  Serial.println("");
}

void printMotors(int speed, double turn) {
    Serial.print("l/" + (String) (speed + (int)turn)
    + "r/" + (String) (speed - (int)turn));  
  
}

 void clearSensors()
{
  int peaks = 0;
  for(int i=0; i<SENSOR_COUNT; i++)
  {
    while(i < SENSOR_COUNT && sensors[i] == LOW) i++;
    while(i < SENSOR_COUNT && sensors[i] != LOW) i++;

     if(sensors[i-1] != LOW)
      peaks++;
  }

  Serial.print((String)peaks + "|");

   if(peaks >= 2) // todo rozwarzyć naprawienie tego dla peaks >= 3
  {
    if(lastErr.history[lastErr.iter] > 0) // todo sprawdzić czy to na pewno w lewo/prawo
    {
      for(int i=0; i<SENSOR_COUNT; i++)
      {
        while(i < SENSOR_COUNT && sensors[i] == LOW) i++;
        while(i < SENSOR_COUNT && sensors[i] != LOW)
        {
          sensors[i] = 0;
          i++;
        }
      }
    }
    else
    {
      for(int i=SENSOR_COUNT; i>0; i--)
      {
        while(i > 0 && sensors[i] == LOW) i--;
        while(i > 0 && sensors[i] != LOW)
        {
          sensors[i] = 0;
          i--;
        }
      }
    }
  }
}

 void readSensors()
{
  for(int i = SENSOR_START; i < SENSOR_START + SENSOR_COUNT; i++)
  {
    sensors[i - SENSOR_START] = digitalRead(i);
  }
}

 void setMotorSpeed(int motor, int speed)
{
  if(motor == L_MOTOR) // lewy silnik
  {
    if(speed < 0)
    {
      digitalWrite(L_DIR, HIGH); // todo sprawdzić czy się zgadza LOW/HIGH
      speed *= -1;
    }
    else
    {
      digitalWrite(L_DIR, LOW);
    }
    int pwm_rate = map(speed, 0, 100, 0, PWM_MAX);
    analogWrite(L_PWM, pwm_rate);
  }
  else if(motor == R_MOTOR)// prawy silnik
  {
    if(speed < 0)
    {
      digitalWrite(R_DIR, HIGH); // todo sprawdzić czy się zgadza LOW/HIGH
      speed *= -1;
    }
    else
    {
      digitalWrite(R_DIR, LOW);
    }
    int pwm_rate = map(speed, 0, 100, 0, PWM_MAX);
    analogWrite(R_PWM, pwm_rate);
  }
}

 void historyPush(double val)
{
  lastErr.iter++;
  if(lastErr.iter == HISTORY_SIZE)
    lastErr.iter -= HISTORY_SIZE;

   lastErr.sum -= lastErr.history[lastErr.iter];
  lastErr.history[lastErr.iter] = val;
  lastErr.sum += lastErr.history[lastErr.iter];

   if(lastErr.filled < HISTORY_SIZE)
    lastErr.filled++;
}
