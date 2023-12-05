const prompt = require("prompt-sync")()

const veiculo = prompt("Qual é o veiculo? :")
const preco = prompt("Qual é o valor? :")

const entrada = preco * 0.50
const parcela = entrada / 12

console.log('-'.repeat(30))
console.log(`Promoção: ${veiculo}`)
console.log(`Entrada de: R$${entrada.toFixed(2)}`)
console.log(`+12x de: R$${parcela.toFixed(2)}`)
