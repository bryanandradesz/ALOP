const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Digite o primeiro número: '));
const num2 = parseInt(prompt('Digite o segundo número: '));
const num3 = parseInt(prompt('Digite o terceiro número: '));

let maior, meio, menor;

if (num1 >= num2 && num1 >= num3) {
  maior = num1;
  if (num2 >= num3) {
    meio = num2;
    menor = num3;
  } else {
    meio = num3;
    menor = num2;
  }
} else if (num2 >= num1 && num2 >= num3) {
  maior = num2;
  if (num1 >= num3) {
    meio = num1;
    menor = num3;
  } else {
    meio = num3;
    menor = num1;
  }
} else {
  maior = num3;
  if (num1 >= num2) {
    meio = num1;
    menor = num2;
  } else {
    meio = num2;
    menor = num1;
  }
}

console.log(`${maior}`);
console.log(`${meio}`);
console.log(`${menor}`);
