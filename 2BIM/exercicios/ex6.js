var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let menor = Infinity;
let maior = -Infinity;

const numbers = lines[0].split(' ').map(Number);

for (const num of numbers) {
  if (num === 0) {
    break;
  }
  if (num < menor) {
    menor = num;
  }
  if (num > maior) {
    maior = num;
  }
}

console.log(`${menor} ${maior}`);

