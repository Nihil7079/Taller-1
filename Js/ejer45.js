// Ejercicio 45 - Calcular el promedio de un arreglo

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
    const suma = arreglo.reduce((acc, val) => acc + val, 0);
    const promedio = suma / arreglo.length;
    console.log(`\nArreglo: ${arreglo.join(", ")}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    rl.close();
  }
};

rl.question("¿Cuántos números tiene el arreglo? ", (input) => {
  const n = parseInt(input);
  if (isNaN(n) || n < 1) { console.log("Número inválido."); rl.close(); }
  else leerNumero(n);
});
