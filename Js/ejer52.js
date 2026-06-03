// Ejercicio 52 - CRUD en arreglo (Agregar, Listar, Actualizar, Eliminar)

let arreglo = ["manzana", "pera", "uva"];

// Agregar
arreglo.push("mango");
console.log("Después de agregar 'mango':", arreglo.join(", "));

// Listar
console.log("\nLista completa:");
for (let i = 0; i < arreglo.length; i++) {
  console.log("  [" + i + "] " + arreglo[i]);
}

// Actualizar índice 1
arreglo[1] = "melón";
console.log("\nDespués de actualizar índice 1 a 'melón':", arreglo.join(", "));

// Eliminar índice 2
arreglo.splice(2, 1);
console.log("Después de eliminar índice 2:", arreglo.join(", "));
