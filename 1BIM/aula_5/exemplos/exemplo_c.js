const prompt = require("prompt-sync")()

const pesoracao = Number(prompt("Qual o peso da ração? (KG):"))
const consumodia = Number(prompt("Consumo diário? (g):"))
const duracao = Math.floor((pesoracao * 1000) / consumodia)
const sobra = Math.round((pesoracao * 1000) % consumodia)

console.log(`Peso da Ração: ${pesoracao}`)
console.log(`Consumo Diário: ${consumodia}`)
console.log('-'.repeat(30))
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra} gramas`)
console.log('-'.repeat(30))