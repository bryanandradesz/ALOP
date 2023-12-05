const prompt = require("prompt-sync")()
const num1 = Number(prompt("Qual o Número 1?"))
const num2 = Number(prompt("Qual o Número 2?"))
const soma = num1 + num2
console.log(`${num1} + ${num2} é igual a ${soma}`)