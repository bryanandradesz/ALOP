const prompt = require('prompt-sync')()

const sorteio = Math.floor(Math.random() * 10 + 1)

let aposta = 0
do {
    aposta = Number(prompt("Advinhe o numero: "))
} while(aposta != sorteio) 
console.log(`Você acertou!`)