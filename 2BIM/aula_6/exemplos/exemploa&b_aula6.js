
const prompt = require("prompt-sync")();
console.log("Programa de Calculo de Notas")
console.log("  ")
const nota1 = Number(prompt("Qual a 1°nota?: "))
const nota2 = Number(prompt("Qual a 2°nota?: "))

const media = (nota1 + nota2) / 2

console.clear();
console.log(`A nota do aluno foi de: ${media}`)
if(media >= 6) {
    console.log("Status Aluno: Aprovado!")
} else {
    console.log("Status Aluno: Reprovado!")
}