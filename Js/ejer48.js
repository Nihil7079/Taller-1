// Ejercicio 48 - Ordenar arreglo de menor a mayor (burbuja)

let numeros = [64, 34, 25, 12, 22, 11, 90];

console.log("Original:", numeros.join(", "));

for (let i = 0; i < numeros.length - 1; i++) {
  for (let j = 0; j < numeros.length - 1 - i; j++) {
    if (numeros[j] > numeros[j + 1]) {
      let temp = numeros[j];
      numeros[j] = numeros[j + 1];
      numeros[j + 1] = temp;
    }
  }
}

console.log("Ordenado:", numeros.join(", "));
