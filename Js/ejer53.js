// Ejercicio 53 - Registrar usuarios (nombre y edad)

let usuarios = [
  { nombre: "Ana",    edad: 20 },
  { nombre: "Luis",   edad: 15 },
  { nombre: "Carlos", edad: 32 },
  { nombre: "Sofia",  edad: 17 },
  { nombre: "Mario",  edad: 25 },
];

console.log("Usuarios registrados:");
for (let i = 0; i < usuarios.length; i++) {
  console.log("  " + usuarios[i].nombre + " - " + usuarios[i].edad + " años");
}
