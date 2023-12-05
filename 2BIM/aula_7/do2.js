const prompt = require('prompt-sync')()


const nome = "andrade"

let entrada = "none"

do {
    entrada = prompt("Seu nome?: ")
} while(entrada.toLowerCase() != nome)
console.log("Certo")