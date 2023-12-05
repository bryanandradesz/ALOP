const prompt = require('prompt-sync')();

let numero = prompt('Digite um número: ');
numero = parseFloat(numero);

if (numero >= 0) {
  let raiz = Math.sqrt(numero);
  if (Number.isInteger(raiz)) {
    console.log(`Raiz: ${raiz}`);
  } else {
    console.log(`Não há raiz para ${numero}.`);
  }
} else {
  console.log('O número deve ser maior ou igual a zero!');
}
