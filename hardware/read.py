import serial
import time
import requests

DEBUG = True
API_ENDPOINT_URL='http://localhost:3000/api/vapes/'

ser = serial.Serial('/dev/cu.usbmodem1101', 9600)

light_off_threshold = 60000
light_on_threshold = 58500

light_on = False
start_time = None

def process_data(data):
    global light_on, start_time
    
    current_value = int(data)
    
    if not light_on and current_value < light_on_threshold:
        light_on = True
        start_time = time.time()
        if DEBUG == True:
            print("Light turned on")

    if light_on and current_value > light_off_threshold:
        light_on = False
        if start_time is not None:
            duration = (time.time() - start_time) * 1000

            if duration > 1000:
                # Make HTTP Backend Endpoint API Request to record the toke
                try:
                    response = requests.post(API_ENDPOINT_URL, json={ 'userId': '3', 'duration': str(duration)})
                    response.raise_for_status()
                    print(f"Toke detected. Toke Time: {duration:.2f} milliseconds.")
                except requests.exceptions.RequestException as exc:
                    print("Error recording data:", exc)

            start_time = None

    if DEBUG == True:
        print("Received data:", data.strip())

# Main loop
try:
    while True:
        if ser.in_waiting > 0:
            data = ser.readline().decode('utf-8').strip()
            process_data(data)
except KeyboardInterrupt:
    print()
    print("Exiting...")
finally:
    ser.close()