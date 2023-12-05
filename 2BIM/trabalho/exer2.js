const prompt = require('prompt-sync')()

let A, B, C = 1

A = Number(prompt("A: "));
B = Number(prompt("B: "));

if (A == 0) {
    C *= A
} else if (A > 0 || B < 0) {
    C -= B
} else {
    C = B - (1 + A)
}

console.log(`C = ${C}`)