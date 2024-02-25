from machine import Pin, ADC
import time

uart = machine.UART(0, baudrate=9600)

adc_pin = Pin(26, Pin.IN)
adc = ADC(adc_pin)

while True:
    val = adc.read_u16()
    uart.write(str(val) + '\n')
    print(str(val))
    time.sleep(.1)
    