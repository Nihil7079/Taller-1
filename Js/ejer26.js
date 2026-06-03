tipo = 2
compra = 200

if (tipo == 1){
    descuento= compra * 0.20
    total = compra - descuento
    console.log("Cliente VIP")
    console.log("Descuento:", descuento)
    console.log("Total a pagar:", total)
}
else if (tipo == 2) {
    descuento= compra * 0.05
    total = compra - descuento
    console.log("Cliente Normal")
    console.log("Descuento:", descuento)
    console.log("Total a pagar:", total)
}
<<<<<<< HEAD
else;
=======
else
>>>>>>> 1e7f8222b70419d9fdd9b5bfc03ad86b4ef62bbf
    console.log ("Tipo de cliente no valido")
