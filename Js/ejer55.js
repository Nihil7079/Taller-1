// Ejercicio 55 - Calcular mayor, menor y promedio de un arreglo

let numeros = [15, 42, 8, 97, 23, 61];
let mayor = numeros[0];
let menor = numeros[0];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > mayor) mayor = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
  suma += numeros[i];
}

let promedio = suma / numeros.length;

console.log("Arreglo: ", numeros.join(", "));
console.log("Mayor:   ", mayor);
console.log("Menor:   ", menor);
console.log("Promedio:", promedio.toFixed(2));
