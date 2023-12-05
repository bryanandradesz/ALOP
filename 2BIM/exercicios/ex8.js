var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (const line of lines) {
  const num = parseInt(line);
  
  if (num === -1) {
    break;
  }
  
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
}
