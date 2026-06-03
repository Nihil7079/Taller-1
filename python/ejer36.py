n = int(input("Cantidad: "))
contador = 0

for i in range(n):
    num = int(input("Número: "))
    
    if num > 0:
        contador += 1

print(contador)