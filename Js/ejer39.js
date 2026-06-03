

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa un número N: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("Por favor ingresa un número entero positivo.");
  } else {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
    console.log(`La suma de 1 a ${n} es: ${suma}`);
  }

  rl.close();
});
