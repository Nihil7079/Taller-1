// Ejercicio 45 - Calcular promedio de un arreglo

let numeros = [10, 20, 30, 40, 50];
let suma = 0;

for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}

let promedio = suma / numeros.length;

console.log("Arreglo:", numeros.join(", "));
console.log("Promedio:", promedio);
