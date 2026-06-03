
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa un número entero no negativo: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 0) {
    console.log("Por favor ingresa un número entero no negativo.");
  } else {
    let factorial = 1;
    for (let i = 2; i <= n; i++) {
      factorial *= i;
    }
    console.log(`${n}! = ${factorial}`);
  }

  rl.close();
});
