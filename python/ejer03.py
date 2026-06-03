num1 = int(input("digite el primer numero: "))
num2 = int(input("digite el segundo numero: "))

suma = num1 + num2 
resta = num1 - num2
multipli = num1 * num2

print ("La suma es:", suma)
print ("La resta es:", resta)
print ("La multiplicacion es:", multipli)

if num2 != 0:
 dividir = num1 / num2
 print("La division es:", dividir)
else:
    print("Error no se puede dividir entre cero")