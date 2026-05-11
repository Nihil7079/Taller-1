valor_compra = 234000

if (valor_compra >= 100000) {
    des = valor_compra * 0.10 
    total = valor_compra - des
    console.log ("Se aplico un descuento de 10%");
}else
    des = 0
    total = valor_compra
    console.log("No se aplico el descuento");
console.log ("Descuento:", des);
console.log ("Total a pagar:", total);