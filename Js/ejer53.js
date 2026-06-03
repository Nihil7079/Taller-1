// Ejercicio 53 - Registrar usuarios (nombre y edad) y mostrar los mayores de edad

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const usuarios = [];

const registrarUsuario = () => {
  rl.question("\n¿Deseas agregar un usuario? (s/n): ", (resp) => {
    if (resp.trim().toLowerCase() === "s") {
      rl.question("Nombre: ", (nombre) => {
        rl.question("Edad: ", (edadInput) => {
          const edad = parseInt(edadInput);
          if (!nombre.trim() || isNaN(edad) || edad < 0) {
            console.log("Datos inválidos, intenta de nuevo.");
          } else {
            usuarios.push({ nombre: nombre.trim(), edad });
            console.log(`Usuario "${nombre.trim()}" registrado.`);
          }
          registrarUsuario();
        });
      });
    } else {
      console.log("\n===== TODOS LOS USUARIOS =====");
      if (usuarios.length === 0) {
        console.log("No hay usuarios registrados.");
      } else {
        usuarios.forEach((u) => console.log(`  ${u.nombre} - ${u.edad} años`));
      }

      const mayores = usuarios.filter((u) => u.edad >= 18);
      console.log("\n===== USUARIOS MAYORES DE EDAD =====");
      if (mayores.length === 0) {
        console.log("Ninguno.");
      } else {
        mayores.forEach((u) => console.log(`  ${u.nombre} - ${u.edad} años`));
      }

      rl.close();
    }
  });
};

console.log("=== Registro de Usuarios ===");
registrarUsuario();
