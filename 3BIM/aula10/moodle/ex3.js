var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split(' ');

const v = [];
const num = Number(lines.pop());
for (let x = 0; x < 10; x++) {
    v.push(Number(lines.shift()))
}

let contador = 0
let posicao = 0

for (let x = 0; x < 10; x++) {
    posicao = v.indexOf(num, x)
    if (posicao != -1) {
        contador += 1
        x = posicao
    }
    
}

console.log(`O numero ${num} apareceu ${contador + 1} vezes`)