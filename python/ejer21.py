edad = int(input("Digite su edad: "))

if edad >= 0:
  if edad <= 12:
    print ("Niño")
  elif edad <= 17:
    print ("Joven")
  elif edad <= 59:
    print ("Adulto")
  else:
    print("Adulto mayor")
else:
    print("Edad no valida")    