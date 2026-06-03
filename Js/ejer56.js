// Ejercicio 55 - Simular carrito de compras: agregar productos y mostrar total

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const carrito = [];

const mostrarMenu = () => {
  console.log("\n===== CARRITO DE COMPRAS =====");
  console.log("1. Agregar producto");
  console.log("2. Ver carrito y total");
  console.log("3. Salir");

  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion.trim()) {
      case "1":
        rl.question("Nombre del producto: ", (nombre) => {
          rl.question("Precio: $", (precioInput) => {
            const precio = parseFloat(precioInput);
            if (!nombre.trim() || isNaN(precio) || precio < 0) {
              console.log("Datos inválidos.");
            } else {
              carrito.push({ nombre: nombre.trim(), precio });
              console.log(`"${nombre.trim()}" agregado al carrito ($${precio.toFixed(2)}).`);
            }
            mostrarMenu();
          });
        });
        break;

      case "2":
        if (carrito.length === 0) {
          console.log("El carrito está vacío.");
        } else {
          console.log("\nProductos en el carrito:");
          carrito.forEach((p, i) =>
            console.log(`  ${i + 1}. ${p.nombre} - $${p.precio.toFixed(2)}`)
          );
          const total = carrito.reduce((acc, p) => acc + p.precio, 0);
          console.log(`\nTotal a pagar: $${total.toFixed(2)}`);
        }
        mostrarMenu();
        break;

      case "3":
        if (carrito.length > 0) {
          const total = carrito.reduce((acc, p) => acc + p.precio, 0);
          console.log(`\nGracias por tu compra. Total: $${total.toFixed(2)}`);
        } else {
          console.log("Saliendo sin compras.");
        }
        rl.close();
        break;

      default:
        console.log("Opción inválida.");
        mostrarMenu();
    }
  });
};

mostrarMenu();
