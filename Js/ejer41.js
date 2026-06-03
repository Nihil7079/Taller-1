
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("¿Cuántos números vas a ingresar? ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("Por favor ingresa un número entero positivo.");
    rl.close();
    return;
  }

  let contador = 0;
  let ingresados = 0;

  const preguntarNumero = () => {
    if (ingresados < n) {
      rl.question(`Número ${ingresados + 1}: `, (val) => {
        const num = parseFloat(val);
        if (!isNaN(num) && num > 0) contador++;
        ingresados++;
        preguntarNumero();
      });
    } else {
      console.log(`\nCantidad de números positivos: ${contador}`);
      rl.close();
    }
  };

  preguntarNumero();
});
