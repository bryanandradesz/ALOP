const prompt = require('prompt-sync')()

let i, fim, a, b;

i = 1 
fim = 3
a = 10
b = 10

while (i <= fim) {
    a = a + i
    b = b + a
    i += 1
} 
console.log(`Resultado = ${a + b}`)