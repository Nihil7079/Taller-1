const rs = require("readline-sync");

let n = Number(rs.question("Ingrese N: "));
let suma = 0;

for(let i = 1; i <= n; i++){
    suma += i;
}

console.log("Suma:", suma);