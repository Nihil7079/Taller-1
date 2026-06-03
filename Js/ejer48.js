// Ejercicio 48 - Encontrar el número mayor en un arreglo

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
    const mayor = Math.max(...arreglo);
    console.log(`\nArreglo: ${arreglo.join(", ")}`);
    console.log(`El número mayor es: ${mayor}`);
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
