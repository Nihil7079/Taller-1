// Ejercicio 37 - Generar Fibonacci hasta N términos

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("¿Cuántos términos de Fibonacci quieres generar? ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("Por favor ingresa un número entero positivo.");
  } else {
    let a = 0, b = 1;
    const serie = [];
    for (let i = 0; i < n; i++) {
      serie.push(a);
      [a, b] = [b, a + b];
    }
    console.log(`Serie de Fibonacci (${n} términos):`);
    console.log(serie.join(", "));
  }

  rl.close();
});
