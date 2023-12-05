const prompt = require('prompt-sync')()

const v = prompt("Valor")
const n = [v]

for (let x = 1;x < 10; x++) {
    n[x] = 2 * n[x - 1]
}

for (let x = 0; x < 10; x++) {
    console.log(`N[${x}] = ${n[x]}`)
}