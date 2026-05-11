valor_compra = float(input("digite el valor de la compra: "))

if valor_compra >= 100000:

  des = valor_compra *0.10 
  total = valor_compra - des
  print("Se aplicó un descuento del 10%")
  
else:
    des = 0
    total = valor_compra
    print("No se aplica el descuento")

print("Descuento:", des)
print("Total a pagar:", total)