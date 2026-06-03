// Ejercicio 51 - Registrar 5 notas, calcular promedio y determinar estado

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const notas = [];

const leerNota = () => {
  if (notas.length < 5) {
    rl.question(`Nota ${notas.length + 1} (0–5): `, (input) => {
      const nota = parseFloat(input);
      if (isNaN(nota) || nota < 0 || nota > 5) {
        console.log("Nota inválida. Debe estar entre 0 y 5.");
      } else {
        notas.push(nota);
      }
      leerNota();
    });
  } else {
    const promedio = notas.reduce((acc, n) => acc + n, 0) / notas.length;
    const estado = promedio >= 3.5 ? "APROBADO" : "REPROBADO";
    console.log(`\nNotas: ${notas.join(", ")}`);
    console.log(`Promedio: ${promedio.toFixed(2)}`);
    console.log(`Estado: ${estado}`);
    rl.close();
  }
};

leerNota();
