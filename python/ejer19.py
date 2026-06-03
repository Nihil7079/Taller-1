salario = int(input("Ingrese el salario: "))

if salario < 1500000:
    impuesto = 0
elif salario <= 3000000:
     impuesto = salario * 0.10 
else: 
    impuesto = salario * 0.20
neto = salario - impuesto

print("Salario:", salario)
print("Impuesto:", impuesto)
print("Salario neto:", neto)