mes = int(input("Ingrese el número del mes (1-12): "))

if mes >= 1 and mes <= 12:
   if mes == 12 or mes == 1 or mes == 2:
    print("invierno")
   elif mes >= 3 and mes <= 5:
     print ("Primavera")
   elif mes >= 6 and mes <= 8:
     print ("Verano")
   else:
       print ("Otoño")
else:
     print("Mes no valido")      
       
       