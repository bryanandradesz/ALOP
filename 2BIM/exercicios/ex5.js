var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const max = 18;
let total = 0;
let qt = 0;
let i = 0;

while (i < lines.length) {
  const pl = Number(lines[i]);

  if (pl <= 0 || total + pl > max) {
    break;
  }

  total += pl;
  qt++;
  i++;
}

console.log(qt);
