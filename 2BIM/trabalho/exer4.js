const prompt = require('prompt-sync')()

let i, fim, a, b;

i = 1 
fim = 3
a = 5
b = 2

while (i <= fim) {
    a = a - i
    b = i + a
    i += 1
} 
console.log(`Resultado = ${a + b}`)