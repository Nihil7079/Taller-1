// Ejercicio 57 - Menú CRUD en arreglo (Agregar, Listar, Actualizar, Eliminar)

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const arreglo = [];

const mostrarMenu = () => {
  console.log("\n===== MENÚ CRUD =====");
  console.log("1. Agregar elemento");
  console.log("2. Listar elementos");
  console.log("3. Actualizar elemento");
  console.log("4. Eliminar elemento");
  console.log("5. Salir");

  rl.question("Selecciona una opción: ", (opcion) => {
    switch (opcion.trim()) {
      case "1":
        rl.question("Ingresa el elemento a agregar: ", (valor) => {
          arreglo.push(valor.trim());
          console.log(`"${valor.trim()}" agregado correctamente.`);
          mostrarMenu();
        });
        break;

      case "2":
        if (arreglo.length === 0) {
          console.log("El arreglo está vacío.");
        } else {
          console.log("\nElementos:");
          arreglo.forEach((elem, i) => console.log(`  [${i}] ${elem}`));
        }
        mostrarMenu();
        break;

      case "3":
        if (arreglo.length === 0) {
          console.log("El arreglo está vacío.");
          mostrarMenu();
        } else {
          arreglo.forEach((elem, i) => console.log(`  [${i}] ${elem}`));
          rl.question("Índice a actualizar: ", (idx) => {
            const i = parseInt(idx);
            if (isNaN(i) || i < 0 || i >= arreglo.length) {
              console.log("Índice inválido.");
              mostrarMenu();
            } else {
              rl.question("Nuevo valor: ", (nuevoValor) => {
                arreglo[i] = nuevoValor.trim();
                console.log("Elemento actualizado.");
                mostrarMenu();
              });
            }
          });
        }
        break;

      case "4":
        if (arreglo.length === 0) {
          console.log("El arreglo está vacío.");
          mostrarMenu();
        } else {
          arreglo.forEach((elem, i) => console.log(`  [${i}] ${elem}`));
          rl.question("Índice a eliminar: ", (idx) => {
            const i = parseInt(idx);
            if (isNaN(i) || i < 0 || i >= arreglo.length) {
              console.log("Índice inválido.");
            } else {
              const eliminado = arreglo.splice(i, 1);
              console.log(`"${eliminado}" eliminado correctamente.`);
            }
            mostrarMenu();
          });
        }
        break;

      case "5":
        console.log("Saliendo...");
        rl.close();
        break;

      default:
        console.log("Opción inválida.");
        mostrarMenu();
    }
  });
};

mostrarMenu();
