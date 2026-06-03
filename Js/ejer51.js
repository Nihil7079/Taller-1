// Ejercicio 51 - Contar cuántos números pares hay en un arreglo

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const arreglo = [];

const leerNumero = (n) => {
  if (arreglo.length < n) {
    rl.question(`Número ${arreglo.length + 1}: `, (input) => {
      const num = parseInt(input);
      if (!isNaN(num)) arreglo.push(num);
      else console.log("Valor inválido, intenta de nuevo.");
      leerNumero(n);
    });
  } else {
    const pares = arreglo.filter((num) => num % 2 === 0);
    console.log(`\nArreglo: ${arreglo.join(", ")}`);
    console.log(`Números pares: ${pares.join(", ") || "ninguno"}`);
    console.log(`Cantidad de números pares: ${pares.length}`);
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
