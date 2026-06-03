// Ejercicio 38 - Adivinar número aleatorio con pistas

let secreto = Math.floor(Math.random() * 10) + 1;
let intentos = [3, 7, secreto]; // simulación de intentos

console.log("(Número secreto para prueba: " + secreto + ")");

for (let i = 0; i < intentos.length; i++) {
  let intento = intentos[i];
  if (intento === secreto) {
    console.log("Intento " + (i + 1) + ": " + intento + " → ¡Correcto!");
    break;
  } else if (intento < secreto) {
    console.log("Intento " + (i + 1) + ": " + intento + " → El número es MAYOR");
  } else {
    console.log("Intento " + (i + 1) + ": " + intento + " → El número es MENOR");
  }
}
