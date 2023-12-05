const prompt = require("prompt-sync")();

const cond = prompt("Qual o valor de cond?: ")

if(cond) {
    console.log(`O valor de cond é: ${cond}`)
}

console.log("Fim do programa.")
