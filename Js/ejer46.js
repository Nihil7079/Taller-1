
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const arreglo = [];

const leerNumero = () => {
  if (arreglo.length < 5) {
    rl.question(`Ingresa el número ${arreglo.length + 1}: `, (input) => {
      const num = parseFloat(input);
      if (isNaN(num)) {
        console.log("Valor inválido, intenta de nuevo.");
      } else {
        arreglo.push(num);
      }
      leerNumero();
    });
  } else {
    console.log("\nArreglo ingresado:");
    console.log(arreglo.join(", "));
    rl.close();
  }
};

leerNumero();
