// Ejercicio 57 - Crear una matriz 3x3 e imprimirla

const matriz = [];

for (let i = 0; i < 3; i++) {
  const fila = [];
  for (let j = 0; j < 3; j++) {
    fila.push(i * 3 + j + 1); // valores del 1 al 9
  }
  matriz.push(fila);
}

console.log("Matriz 3x3:");
for (const fila of matriz) {
  console.log(fila.join("\t"));
}
