const prompt = require('prompt-sync')();

const limite = parseInt(prompt('Digite o limite da sequência: '));

let sequencia = '';

for (let i = 1; i <= limite; i++) {
  sequencia += i + ' ';
}

console.log(sequencia);
