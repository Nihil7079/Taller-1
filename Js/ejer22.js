let lado1 = 5;
let lado2 = 5;
let lado3 = 4;
if (lado1 == lado2 && lado2 == lado3){
  console.log ("El triangulo es equilatero");
}
 else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3 ) {
    console.log ("El triangulo es isosceles");
} 
else {
    console.log ("El triangulo escalano");
}