// Ejercicio 47 - Buscar un número en el arreglo y mostrar su posición (o indicar si no existe)

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
    rl.question("\n¿Qué número deseas buscar? ", (input) => {
      const buscar = parseFloat(input);
      const indice = arreglo.indexOf(buscar);
      console.log(`\nArreglo: ${arreglo.join(", ")}`);
      if (indice !== -1) {
        console.log(`El número ${buscar} se encontró en la posición ${indice} (índice base 0).`);
      } else {
        console.log(`El número ${buscar} no existe en el arreglo.`);
      }
      rl.close();
    });
  }
};

rl.question("¿Cuántos números tiene el arreglo? ", (input) => {
  const n = parseInt(input);
  if (isNaN(n) || n < 1) { console.log("Número inválido."); rl.close(); }
  else leerNumero(n);
});
