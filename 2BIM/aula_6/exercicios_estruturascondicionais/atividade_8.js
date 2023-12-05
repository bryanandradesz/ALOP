const prompt = require('prompt-sync')();

const ano = parseInt(prompt('Digite o ano: '));

if (ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0)) {
  console.log('BISSEXTO');
} else {
  console.log('NAOBISSEXTO');
}
