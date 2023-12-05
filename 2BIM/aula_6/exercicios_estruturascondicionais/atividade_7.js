const prompt = require('prompt-sync')();

// Leitura dos valores dos produtos
const produto1 = parseFloat(prompt('Digite o valor do produto 1: '));
const produto2 = parseFloat(prompt('Digite o valor do produto 2: '));
const produto3 = parseFloat(prompt('Digite o valor do produto 3: '));

let produtoMaisBarato;

// Verificação do produto mais barato
if (produto1 <= produto2 && produto1 <= produto3) {
  produtoMaisBarato = 'Primeiro produto';
} else if (produto2 <= produto1 && produto2 <= produto3) {
  produtoMaisBarato = 'Segundo produto';
} else if (produto3 <= produto1 && produto3 <= produto2) {
  produtoMaisBarato = 'Terceiro produto';
}

// Impressão do resultado
console.log(`${produtoMaisBarato}`);
