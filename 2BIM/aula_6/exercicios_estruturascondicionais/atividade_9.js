const prompt = require('prompt-sync')();

const lado1 = Number(prompt('Digite o valor do primeiro lado: '));
const lado2 = Number(prompt('Digite o valor do segundo lado: '));
const lado3 = Number(prompt('Digite o valor do terceiro lado: '));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {

  if (lado1 === lado2 && lado1 === lado3) {
    console.log('Equilatero');
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('Isosceles');
  } else {
    console.log('Escaleno');
  }
} else {
  console.log('Não é possível formar um triângulo com esses valores.');
}
