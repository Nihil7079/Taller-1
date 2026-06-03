productos = []
total = 0

while True:
    nombre = input("Producto: ")
    
    if nombre == "fin":
        break
        
    precio = float(input("Precio: "))
    
    productos.append(nombre)
    total += precio

print(productos)
print("Total:", total)