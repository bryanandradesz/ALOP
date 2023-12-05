var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines.shift())

for (let x = 0; x < N;x++) {
    console.log(`${x}`)
}