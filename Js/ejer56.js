// Ejercicio 56 - Simular carrito de compras

let carrito = [
  { nombre: "Leche",    precio: 3500 },
  { nombre: "Pan",      precio: 2000 },
  { nombre: "Huevos",   precio: 8000 },
];

console.log("Productos en el carrito:");
let total = 0;

for (let i = 0; i < carrito.length; i++) {
  console.log("  " + carrito[i].nombre + " - $" + carrito[i].precio);
  total += carrito[i].precio;
}

console.log("Total a pagar: $" + total);
