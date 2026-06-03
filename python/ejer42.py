import random

n = int(input("Tamaño: "))
lista = []

for i in range(n):
    lista.append(random.randint(1,100))

print(lista)
print(sum(lista))
