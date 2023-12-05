var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let T = Number(lines.shift());

let N = [];
for (let i = 0; i < 1000; i++) {
    N[i] = i % T;
}

for (let i = 0; i < 1000; i++) {
    console.log("N[" + i + "] = " + N[i]);
}
