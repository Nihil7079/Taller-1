// Ejercicio 43 - Encontrar el número mayor en un arreglo

let numeros = [15, 42, 8, 97, 23, 61];
let mayor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i];
}

console.log("Arreglo:", numeros.join(", "));
console.log("Mayor:", mayor);
