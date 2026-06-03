
const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa el tamaño N del arreglo: ", (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n < 1) {
    console.log("Por favor ingresa un número entero positivo.");
  } else {
    const arreglo = Array.from({ length: n }, () => Math.floor(Math.random() * 100) + 1);
    const suma = arreglo.reduce((acc, val) => acc + val, 0);

    console.log(`\nArreglo generado (${n} elementos):`);
    console.log(arreglo.join(", "));
    console.log(`Suma total: ${suma}`);
  }

  rl.close();
});
