datos = []

while True:
    print("1.Agregar")
    print("2.Listar")
    print("3.Eliminar")
    print("4.Salir")
    
    op = input("Opción: ")
    
    if op == "1":
        datos.append(input("Dato: "))
    elif op == "2":
        print(datos)
    elif op == "3":
        eliminar = input("Eliminar: ")
        datos.remove(eliminar)
    elif op == "4":
        break