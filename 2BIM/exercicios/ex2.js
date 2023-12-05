var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const começo = parseInt(lines[0]);
const final = parseInt(lines[1]);

let soma = 0;

for (let i = começo; i <= final; i++) {
  soma += i;
}

console.log(soma);
