import serial
import time
import requests

ser = serial.Serial('/dev/cu.usbmodem1101', 9600)

light_off_threshold = 60500
light_on_threshold = 57500

light_on = False
start_time = None

def process_data(data):
    global light_on, start_time
    
    current_value = int(data)
    
    if not light_on and current_value < light_on_threshold:
        light_on = True
        start_time = time.time()
        print("Light turned on")

    if light_on and current_value > light_off_threshold:
        light_on = False
        if start_time is not None:
            duration = time.time() - start_time
            print(f"Light turned off. Duration: {duration:.2f} seconds")
            start_time = None

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
    