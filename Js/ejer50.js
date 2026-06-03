// Ejercicio 50 - Eliminar elementos duplicados

let numeros = [1, 2, 2, 3, 4, 4, 4, 5];
let sinDuplicados = [];

for (let i = 0; i < numeros.length; i++) {
  if (!sinDuplicados.includes(numeros[i])) {
    sinDuplicados.push(numeros[i]);
  }
}

console.log("Original:       ", numeros.join(", "));
console.log("Sin duplicados: ", sinDuplicados.join(", "));
