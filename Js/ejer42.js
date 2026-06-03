// Ejercicio 42 - Sumar elementos de un arreglo de tamaño N (aleatorios)

let n = 6;
let arreglo = [];

for (let i = 0; i < n; i++) {
  arreglo.push(Math.floor(Math.random() * 100) + 1);
}

let suma = 0;
for (let i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
}

console.log("Arreglo:", arreglo.join(", "));
console.log("Suma:", suma);
