lista = [5,7,9,2]

buscar = int(input("Buscar: "))

if buscar in lista:
    print(lista.index(buscar))
else:
    print("No existe")