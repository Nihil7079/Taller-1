const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero: ", function(num){

    for(let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }

    rl.close();
});