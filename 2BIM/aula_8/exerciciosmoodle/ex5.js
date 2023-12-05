const prompt = require('prompt-sync')();

let pares = 0;
let impares = 0;

console.log('Digite uma sequência de números (0 para sair):');

while (true) {
  const numero = parseInt(prompt('Digite um número: '));
  
  if (numero === 0) {
    break;
  }
  
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`PARES: ${pares}`);
console.log(`IMPARES: ${impares}`);
