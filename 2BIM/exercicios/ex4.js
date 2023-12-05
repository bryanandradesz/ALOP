var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let ti = 0;
let qt = 0;

for (let i = 0; i < lines.length; i++) {
  const idade = parseInt(lines[i]);
  
  if (idade < 0) {
    break;
  }

  ti += idade;
  qt++;
}

const media = ti / qt;
console.log(media.toFixed(2));
