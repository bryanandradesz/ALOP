var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines.shift());
const v = []

for (let x = 0; x < n; x++) {
    v.push(Number(lines.shift()))
}
console.log(v)

let aux = 0
for (let x = 0; x < n; x++) {
    aux = aux + v[x]
}

const media = (aux / n).toFixed(2)


console.log(media)
