const prompt = require("prompt-sync")();

const salario = Number(prompt(`Qual o salário recebido? :`))
const tempo = Number(prompt(`Quantidade de anos trabalhadas:`))


const num4 = Math.floor(tempo / 4)
const acrescimo = salario * (num4 * 0.01)
const salariofinal = salario + acrescimo

console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log('-'.repeat(30))
console.log(`CALCULO DE ACRESCIMO`)
console.log('-'.repeat(30))
console.log(`Salário: R$${salario.toFixed(2)}`)
console.log(`Quadrineos: ${num4}`)
console.log(`Salário Final: R$${salariofinal.toFixed(2)}`)
console.log('-'.repeat(30))
