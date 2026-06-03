// Ejercicio 57 - Validar contraseña (mínimo 8 caracteres y al menos 1 número)

let contrasenas = ["abc", "sinNumeros", "segura1234"];

for (let i = 0; i < contrasenas.length; i++) {
  let c = contrasenas[i];
  let tieneLength = c.length >= 8;
  let tieneNumero = /\d/.test(c);

  let valida = tieneLength && tieneNumero;
  console.log('"' + c + '" → ' + (valida ? "VÁLIDA" : "INVÁLIDA"));
}
