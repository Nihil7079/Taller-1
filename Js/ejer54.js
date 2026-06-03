// Ejercicio 54 - Mostrar usuarios mayores de edad

let usuarios = [
  { nombre: "Ana",    edad: 20 },
  { nombre: "Luis",   edad: 15 },
  { nombre: "Carlos", edad: 32 },
  { nombre: "Sofia",  edad: 17 },
  { nombre: "Mario",  edad: 25 },
];

console.log("Mayores de edad:");
for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].edad >= 18) {
    console.log("  " + usuarios[i].nombre + " - " + usuarios[i].edad + " años");
  }
}
