// Ejercicio 47 - Buscar un número y mostrar su posición

let numeros = [10, 25, 37, 42, 58];
let buscar = 37;
let posicion = -1;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === buscar) {
    posicion = i;
    break;
  }
}

console.log("Arreglo:", numeros.join(", "));
if (posicion !== -1) {
  console.log("El número " + buscar + " está en la posición " + posicion);
} else {
  console.log("El número " + buscar + " no existe en el arreglo");
}
