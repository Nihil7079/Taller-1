// Ejercicio 36 - Contar cuántos de N números son positivos

let numeros = [3, -1, 5, -2, 0, 7, -4, 2, 1, -3];
let positivos = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > 0) positivos++;
}

console.log("Números:", numeros.join(", "));
console.log("Positivos:", positivos);
