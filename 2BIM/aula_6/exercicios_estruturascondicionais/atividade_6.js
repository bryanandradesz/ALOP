const prompt = require('prompt-sync')();

// entrada de dados
const a = parseFloat(prompt('Digite o valor de a: '));
const b = parseFloat(prompt('Digite o valor de b: '));
const c = parseFloat(prompt('Digite o valor de c: '));

// verificação se é uma equação do segundo grau
if (a == 0) {
  console.log('NEESG');
} else {
  // cálculo do delta
  const delta = b * b - 4 * a * c;

  // verificação se existem raízes reais
  if (delta < 0) {
    console.log('NRR');
  } else {
    // cálculo das raízes
    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Raízes da equação: ${x1.toFixed(2)} e ${x2.toFixed(2)}`);
  }
}
