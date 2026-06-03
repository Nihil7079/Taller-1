// Ejercicio 44 - Encontrar el número menor en un arreglo

let numeros = [15, 42, 8, 97, 23, 61];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < menor) menor = numeros[i];
}

console.log("Arreglo:", numeros.join(", "));
console.log("Menor:", menor);
