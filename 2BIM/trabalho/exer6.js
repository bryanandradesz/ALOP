const prompt = require('prompt-sync')()

let i, fim, a, b, c;

i = 5
c = 0
fim = Number(prompt("fim: "))
a = Number(prompt("a: "))
b = Number(prompt("b: "))

do {
    a -= i
    if (a + b > 0) {
        b += 1
    }
    i -= 1
} while (i >= fim)
c = b -a

console.log(`c = ${c}`)