const prompt = require('prompt-sync')();

const alice = Number(prompt("Alice"))
const beto = Number(prompt("Beto"))
const clara = Number(prompt("Clara"))


let vencedor = '*';
if (alice == 0 && beto == 0 && clara == 1) {
    vencedor = 'C'
}

if (alice == 0 && beto == 1 && clara == 0) {
    vencedor = 'B'
}


if (alice == 1 && beto == 0 && clara == 0) {
    vencedor = 'A'
}

if (alice && beto == 1) {
    vencedor = '*'
}

if (clara && beto == 1) {
    vencedor = '*'
}
if (clara && alice == 1) {
    vencedor = '*'
}
console.log(vencedor);
console.log('\n');