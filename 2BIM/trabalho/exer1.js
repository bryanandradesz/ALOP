const prompt = require('prompt-sync')()

let A = Number(prompt("A: "));
let B = Number(prompt("B: "));

if (A == 2) {
    if (B == 2) {
        A = A + B
    }
} else {
    A = A - B
}

console.log(`A = ${A}`)