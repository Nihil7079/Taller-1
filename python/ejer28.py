nota = float(input("Ingrese la nota (0-5): "))

if 4.5 <= nota <= 5.0:
    print ("Excelente")
elif 4 <= nota < 4.5:
    print ("Bueno")
elif 3 <= nota < 4:
    print("Aprobado")
elif 0 <= nota < 3:
    print ("Reprobado")
else:
    print("Nota invalida")    