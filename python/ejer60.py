votos = [0,0,0]

for i in range(5):
    voto = int(input("Vote 1-3: "))
    
    votos[voto-1] += 1

ganador = votos.index(max(votos)) + 1

print("Ganador candidato", ganador)