// Ejercicio 58 - Juego: adivinar número con máximo 5 intentos

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const secreto = Math.floor(Math.random() * 100) + 1;
const MAX_INTENTOS = 5;
let intentos = 0;

console.log("Adivina el número secreto entre 1 y 100. Tienes 5 intentos.");

const intentar = () => {
  if (intentos >= MAX_INTENTOS) {
    console.log(`\nAgotaste tus ${MAX_INTENTOS} intentos. El número era: ${secreto}`);
    rl.close();
    return;
  }

  rl.question(`\nIntento ${intentos + 1}/${MAX_INTENTOS}: `, (input) => {
    const intento = parseInt(input);

    if (isNaN(intento)) {
      console.log("Por favor ingresa un número válido.");
      intentar();
      return;
    }

    intentos++;

    if (intento === secreto) {
      console.log(`¡Correcto! Adivinaste el número en ${intentos} intento(s).`);
      rl.close();
    } else if (intentos < MAX_INTENTOS) {
      console.log(intento < secreto ? "El número secreto es MAYOR." : "El número secreto es MENOR.");
      intentar();
    } else {
      console.log(`\nAgotaste tus ${MAX_INTENTOS} intentos. El número era: ${secreto}`);
      rl.close();
    }
  });
};

intentar();
