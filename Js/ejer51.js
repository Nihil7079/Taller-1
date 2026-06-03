// Ejercicio 51 - Registrar 5 notas, calcular promedio y estado

let notas = [4.5, 3.2, 2.8, 4.0, 3.7];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
  suma += notas[i];
}

let promedio = suma / notas.length;
let estado = promedio >= 3.5 ? "APROBADO" : "REPROBADO";

console.log("Notas:    ", notas.join(", "));
console.log("Promedio:", promedio.toFixed(2));
console.log("Estado:  ", estado);
