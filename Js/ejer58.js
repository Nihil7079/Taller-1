// Ejercicio 58 - Crear matriz 3x3 e imprimirla

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("Matriz 3x3:");
for (let i = 0; i < 3; i++) {
  console.log(matriz[i].join("  "));
}
