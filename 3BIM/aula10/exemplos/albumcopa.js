var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines.shift())
const m = Number(lines.shift())
const compradas = []

for (let x = 0; x < m;x++) {
    let figurinha = Number(lines.shift())
    compradas.push(figurinha)
}

let cont = 0
for (x = 1; x <= n; x++) {
    if (!compradas.includes(x)) {
        cont ++
    }
}

console.log(cont)