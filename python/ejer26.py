tipo = int(input("Ingresa tipo de cliente (1 = VIP, 2 = Normal):"))
compra = int(input("Ingrese el valor de la compra:"))
if tipo == 1:
    descuento = compra * 0.20
    total = compra - descuento
    print("Cliente VIP")
    print("Descuento:", descuento)
    print("Total a pagar:", total)
elif tipo == 2:
    descuento = compra *0.05
    total = compra - descuento
    print("Cliente Normal")
    print("Descuento:", descuento)
    print("Total a pagar:", total)
else:
    print("Tipo de cliente no válido")    