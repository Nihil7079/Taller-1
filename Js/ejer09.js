a = 100;
b = 200;
console.log ("Antes del intercambio:");
console.log ("a =", a);
console.log ("b =", b);

a, b = b, a;

console.log ("Despues del intercambio:");
console.log ("a =", b);
console.log ("b =", a);