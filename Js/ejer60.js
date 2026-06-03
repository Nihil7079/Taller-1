// Ejercicio 59 - Sistema de votación: 3 candidatos, contar votos y mostrar ganador

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const candidatos = [
  { nombre: "Candidato A", votos: 0 },
  { nombre: "Candidato B", votos: 0 },
  { nombre: "Candidato C", votos: 0 },
];

const votar = () => {
  console.log("\n===== SISTEMA DE VOTACIÓN =====");
  console.log("1. Candidato A");
  console.log("2. Candidato B");
  console.log("3. Candidato C");
  console.log("4. Finalizar votación");

  rl.question("Tu voto: ", (opcion) => {
    const idx = parseInt(opcion) - 1;

    if (opcion.trim() === "4") {
      console.log("\n===== RESULTADOS =====");
      candidatos.forEach((c) => console.log(`  ${c.nombre}: ${c.votos} voto(s)`));

      const maxVotos = Math.max(...candidatos.map((c) => c.votos));
      const ganadores = candidatos.filter((c) => c.votos === maxVotos);

      if (ganadores.length === 1) {
        console.log(`\nGanador: ${ganadores[0].nombre} con ${maxVotos} voto(s).`);
      } else {
        const empate = ganadores.map((c) => c.nombre).join(" y ");
        console.log(`\nEmpate entre: ${empate} con ${maxVotos} voto(s) cada uno.`);
      }

      rl.close();
    } else if (idx >= 0 && idx <= 2) {
      candidatos[idx].votos++;
      console.log(`Voto registrado para ${candidatos[idx].nombre}.`);
      votar();
    } else {
      console.log("Opción inválida.");
      votar();
    }
  });
};

votar();
