const prompt = require('prompt-sync')();

console.log('Digite o valor do lado do quadrado (0 para sair):');

while (true) {
  const lado = parseInt(prompt('Lado: '));

  if (lado === 0) {
    console.log("Area = "+ lado)
    break;
  }

  const area = lado * lado;
  console.log('Area =', area);
}
