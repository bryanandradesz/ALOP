const prompt = require('prompt-sync')()

const num = Number(prompt("Num"))

let resultado = 1
for (let i = 1;i <= num; i++) {
    resultado *= i
}

console.log(`${num}! = ${resultado}`)