// Ejercicio 54 - Mostrar usuarios mayores de edad (a partir de un arreglo ya registrado)
// Nota: este ejercicio complementa el ejer53. Aquí se filtra y muestra solo los mayores de edad.

const usuarios = [
  { nombre: "Ana", edad: 20 },
  { nombre: "Luis", edad: 15 },
  { nombre: "Carlos", edad: 32 },
  { nombre: "Sofia", edad: 17 },
  { nombre: "Mario", edad: 25 },
];

console.log("===== TODOS LOS USUARIOS =====");
usuarios.forEach((u) => console.log(`  ${u.nombre} - ${u.edad} años`));

const mayores = usuarios.filter((u) => u.edad >= 18);

console.log("\n===== USUARIOS MAYORES DE EDAD =====");
if (mayores.length === 0) {
  console.log("Ningún usuario es mayor de edad.");
} else {
  mayores.forEach((u) => console.log(`  ${u.nombre} - ${u.edad} años`));
}
