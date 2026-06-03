import random

num = random.randint(1,10)

for i in range(5):
    intento = int(input("Número: "))
    
    if intento == num:
        print("Ganaste")
        break
else:
    print("Perdiste")