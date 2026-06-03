
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const secreto = Math.floor(Math.random() * 10) + 1;
console.log("Adivina el número secreto entre 1 y 10.");

const intentar = () => {
  rl.question("Tu intento: ", (input) => {
    const intento = parseInt(input);

    if (isNaN(intento)) {
      console.log("Por favor ingresa un número válido.");
      intentar();
      return;
    }

    if (intento === secreto) {
      console.log("¡Correcto! Adivinaste el número.");
      rl.close();
    } else if (intento < secreto) {
      console.log("El número secreto es MAYOR. Intenta de nuevo.");
      intentar();
    } else {
      console.log("El número secreto es MENOR. Intenta de nuevo.");
      intentar();
    }
  });
};

intentar();
