// Ejercicio 56 - Validar contraseña: mínimo 8 caracteres y al menos 1 número

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question("Ingresa una contraseña: ", (contrasena) => {
  const tieneMinCaracteres = contrasena.length >= 8;
  const tieneNumero = /\d/.test(contrasena);

  console.log("\n===== VALIDACIÓN DE CONTRASEÑA =====");
  console.log(`Mínimo 8 caracteres: ${tieneMinCaracteres ? "✔ Cumple" : "✘ No cumple"}`);
  console.log(`Al menos 1 número:   ${tieneNumero ? "✔ Cumple" : "✘ No cumple"}`);

  if (tieneMinCaracteres && tieneNumero) {
    console.log("\nContraseña VÁLIDA.");
  } else {
    console.log("\nContraseña INVÁLIDA. Corrígela e intenta de nuevo.");
  }

  rl.close();
});
