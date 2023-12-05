const prompt = require('prompt-sync')();

const tamanho = parseInt(prompt('Digite o tamanho da sequência: '));

let maior = Number.MIN_SAFE_INTEGER;
let menor = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < tamanho; i++) {
  const numero = parseInt(prompt('Digite um número: ')).split(' ');

  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }
}

console.log('MAIOR:', maior);
console.log('MENOR:', menor);
