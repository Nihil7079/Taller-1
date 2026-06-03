clave = input("Contraseña: ")

tiene_numero = False

for c in clave:
    if c.isdigit():
        tiene_numero = True

if len(clave) >= 8 and tiene_numero:
    print("Válida")
else:
    print("Inválida")