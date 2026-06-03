salario = 2000000
if (salario < 1500000)
  impuesto = 0; 
else if (salario <= 3000000)
  impuesto = salario * 0.10
else
    impuesto = salario * 0.20;  
neto = salario - impuesto 
console.log("Salario:", salario);
console.log("Impuesto:", impuesto);
console.log("Salario neto:", neto);