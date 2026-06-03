user_correcto = "admin"
password_correcto = "1234"
rol_correcto =  "admin"

usuario = input("Ingrese el usuario: ")
contraseña = input("Ingrese la contraseña: ")
rol = input("Ingrese el rol: ")

if usuario == user_correcto and contraseña == password_correcto and rol == rol_correcto:
    print("Acceso permitido")
else:
    print("Acceso denegado")
