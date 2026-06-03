// Ejercicio 37 - Fibonacci hasta N términos

let n = 10;
let a = 0, b = 1;
let serie = [];

for (let i = 0; i < n; i++) {
  serie.push(a);
  let temp = a + b;
  a = b;
  b = temp;
}

console.log("Fibonacci:", serie.join(", "));
