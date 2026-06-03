import random

numero = random.randint(1,10)

while True:
    intento = int(input("Adivina: "))
    
    if intento == numero:
        print("Ganaste")
        break
    elif intento < numero:
        print("Más alto")
    else:
        print("Más bajo")