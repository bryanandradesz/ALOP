const prompt = require("prompt-sync")();

const produto = prompt("Qual é o produto? :")
const preco = Number(prompt(`Qual o preço do ${produto}? :`))
const metadep = preco / 2
const total = (2 * preco) + metadep

console.log(`${produto} - Promoção: Leve 3 por R$${total.toFixed(2)}`)