const rs = require("readline-sync");

let num = Number(rs.question("Ingrese un numero: "));
let factorial = 1;

for(let i = 1; i <= num; i++){
    factorial *= i;
}

console.log("Factorial:", factorial);