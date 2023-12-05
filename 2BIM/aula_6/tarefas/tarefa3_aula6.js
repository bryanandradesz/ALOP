const prompt = require('prompt-sync')();

const nota100 = 100;
const nota50 = 50;
const nota10 = 10;

let saque = prompt('Digite o valor do saque: ');
saque = parseInt(saque);

if (saque % nota10 !== 0) {
  console.log('Valor inválido para notas disponíveis (R$ 10, 50, 100)');
} else if (saque < nota10) {
  console.log('Valor inválido! O saque mínimo é de R$ 10,00.');
} else {
  let notas100 = Math.floor(saque / nota100);
  saque = saque % nota100;

  let notas50 = Math.floor(saque / nota50);
  saque = saque % nota50;

  let notas10 = Math.floor(saque / nota10);

  console.log(`Notas de 100: ${notas100}`);
  console.log(`Notas de 50: ${notas50}`);
  console.log(`Notas de 10: ${notas10}`);
}
