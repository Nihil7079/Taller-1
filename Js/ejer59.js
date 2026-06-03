// Ejercicio 59 - Juego: adivinar número con máximo 5 intentos

let secreto = Math.floor(Math.random() * 100) + 1;
let intentos = [30, 60, 80, secreto, 10]; // simulación
let maxIntentos = 5;
let acerto = false;

console.log("(Número secreto para prueba: " + secreto + ")");

for (let i = 0; i < maxIntentos; i++) {
  let intento = intentos[i];
  console.log("Intento " + (i + 1) + ": " + intento);

  if (intento === secreto) {
    console.log("¡Correcto! Adivinaste en " + (i + 1) + " intento(s).");
    acerto = true;
    break;
  } else if (intento < secreto) {
    console.log("  → El número es MAYOR");
  } else {
    console.log("  → El número es MENOR");
  }
}

if (!acerto) {
  console.log("Agotaste los intentos. El número era: " + secreto);
}
