
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa un número entero: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor ingresa un número válido.");
  } else {
    const esNegativo = numero < 0;
    const invertido = Math.abs(numero).toString().split("").reverse().join("");
    const resultado = esNegativo ? -parseInt(invertido) : parseInt(invertido);
    console.log(`Número original: ${numero}`);
    console.log(`Número invertido: ${resultado}`);
  }

  rl.close();
});
