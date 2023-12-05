var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const num = parseInt(lines[0]);
let primo = true;

if (num <= 1) {
  primo = false;
} else {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      primo = false;
      break;
    }
  }
}

console.log(primo ? '1' : '0');
