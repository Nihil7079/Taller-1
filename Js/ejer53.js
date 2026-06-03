// Ejercicio 53 - Ordenar arreglo de menor a mayor (método burbuja)

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const arreglo = [];

const leerNumero = (n) => {
  if (arreglo.length < n) {
    rl.question(`Número ${arreglo.length + 1}: `, (input) => {
      const num = parseFloat(input);
      if (!isNaN(num)) arreglo.push(num);
      else console.log("Valor inválido, intenta de nuevo.");
      leerNumero(n);
    });
  } else {
    console.log(`\nArreglo original: ${arreglo.join(", ")}`);

    // Ordenamiento burbuja
    const ordenado = [...arreglo];
    for (let i = 0; i < ordenado.length - 1; i++) {
      for (let j = 0; j < ordenado.length - 1 - i; j++) {
        if (ordenado[j] > ordenado[j + 1]) {
          [ordenado[j], ordenado[j + 1]] = [ordenado[j + 1], ordenado[j]];
        }
      }
    }

    console.log(`Arreglo ordenado (menor a mayor): ${ordenado.join(", ")}`);
    rl.close();
  }
};

rl.question("¿Cuántos números tiene el arreglo? ", (input) => {
  const n = parseInt(input);
  if (isNaN(n) || n < 1) {
    console.log("Número inválido.");
    rl.close();
  } else {
    leerNumero(n);
  }
});
