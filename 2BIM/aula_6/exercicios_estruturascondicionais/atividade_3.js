const prompt = require("prompt-sync")();

const tabelaPrecos = {
    1: 5.30,
    2: 6.00,
    3: 3.20,
    4: 2.50
  };

const codigo = parseInt(prompt('Digite o código do produto: '));
const qtd = parseInt(prompt('Digite a quantidade comprada: '));

const valorTotal = tabelaPrecos[codigo] * qtd;




if (qtd >= 15 || valorTotal >= 40) {
  const valorDesconto = valorTotal * 0.15;
  const valorComDesconto = valorTotal - valorDesconto;
  console.log(`R$ ${valorComDesconto.toFixed(2)}`);
} else {
  console.log(`R$ ${valorTotal.toFixed(2)}`);
}