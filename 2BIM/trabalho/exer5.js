const prompt = require('prompt-sync')()

let i, fim, a, b, c = 0

fim = Number(prompt("fim: "))
a = Number(prompt("a: "))
b = Number(prompt("b: "))

for (i = 0; i < fim; i += 2) {
    a = b + i
    if  (a % 2 == 0) {
        c = c + a + b
    }
} 

console.log(`c = ${c}`)