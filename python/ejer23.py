salario_base = float(input("Ingrese el salario base: "))
horas_extra = float(input("Ingrese las horas extra trabajadas: "))

valor_h = salario_base / 160
pago_h_extra = 1.5 * valor_h

total_h_extra = horas_extra *  pago_h_extra
salario_total = salario_base + total_h_extra

print("salario total: ", salario_total)