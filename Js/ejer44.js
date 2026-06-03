
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa un número entero: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor ingresa un número válido.");
  } else {
    const cantidadDigitos = Math.abs(numero).toString().length;
    console.log(`El número ${numero} tiene ${cantidadDigitos} dígito(s).`);
  }

  rl.close();
});
