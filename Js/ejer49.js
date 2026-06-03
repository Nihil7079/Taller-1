// Ejercicio 49 - Invertir un arreglo

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
    const invertido = [...arreglo].reverse();
    console.log(`\nArreglo original:  ${arreglo.join(", ")}`);
    console.log(`Arreglo invertido: ${invertido.join(", ")}`);
    rl.close();
  }
};

rl.question("¿Cuántos números tiene el arreglo? ", (input) => {
  const n = parseInt(input);
  if (isNaN(n) || n < 1) { console.log("Número inválido."); rl.close(); }
  else leerNumero(n);
});
