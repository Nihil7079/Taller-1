num1 = int(input("digite el primer valor: "))
num2 = int(input("digite el segundo valor: "))
num3 = int(input("digite el tecer valor: "))

if num1 >= num2 and num1 >= num3:
    print ("El numero mayor es: ", num1)
elif num2 >= num1 and num2 >= num3: 
    print("El numero mayor es:", num2)
else:
    print ("El numero mayor es:", num3)
     