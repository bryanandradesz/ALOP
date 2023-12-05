var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

const v = []
const n = Number(lines.shift())

for (let x = 0; x < n;x++){
    v.push(Number(lines.shift()))
   }

 const K = Number(lines.shift())
console.log(v[K].toFixed(2))