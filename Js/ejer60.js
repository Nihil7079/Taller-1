// Ejercicio 60 - Sistema de votación: 3 candidatos, contar votos y mostrar ganador

let votos = [1, 2, 1, 3, 1, 2, 2, 3, 1, 2]; // 1=CandA, 2=CandB, 3=CandC

let candidatos = ["Candidato A", "Candidato B", "Candidato C"];
let conteo = [0, 0, 0];

for (let i = 0; i < votos.length; i++) {
  conteo[votos[i] - 1]++;
}

console.log("Resultados:");
for (let i = 0; i < candidatos.length; i++) {
  console.log("  " + candidatos[i] + ": " + conteo[i] + " votos");
}

let ganadorIdx = 0;
for (let i = 1; i < conteo.length; i++) {
  if (conteo[i] > conteo[ganadorIdx]) ganadorIdx = i;
}

console.log("\nGanador: " + candidatos[ganadorIdx] + " con " + conteo[ganadorIdx] + " votos");
