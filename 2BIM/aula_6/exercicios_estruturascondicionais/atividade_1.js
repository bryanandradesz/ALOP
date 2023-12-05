const prompt = require("prompt-sync")();
let total = 0
const a = Number(prompt("A: "));
const b = Number(prompt("B: "));
const c = Number(prompt("C: "));

const media = (a + b + c) / 3;



if(a > media) {
    total = total + 1; 
}


if(b > media) {
    total = total + 1; 
}


if(c > media) {
    total = total + 1; 
}

console.log(`Média: ${media}\nNumeros acima: ${total}`);