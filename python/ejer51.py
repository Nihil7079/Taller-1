notas = []

for i in range(5):
    notas.append(float(input("Nota: ")))

prom = sum(notas)/5

print("Promedio:", prom)

if prom >= 3:
    print("Aprueba")
else:
    print("Reprueba")