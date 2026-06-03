salario_base = 2000000
horas_extras = 8

valor_h = salario_base / 160 
pago_h_extra = 1.5 * valor_h

total_h_extra = horas_extras * pago_h_extra
salario_total = salario_base + total_h_extra

console.log ("Salario total:", salario_total)