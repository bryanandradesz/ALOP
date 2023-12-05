const prompt = require('prompt-sync')();

const numero = parseInt(prompt('Digite um número: '));

if (numero == 0) {
  console.log('NULO');
}

else if (numero > 0) {

  if (numero % 2 == 0) {
    console.log('POSITIVO PAR');
  } else {
    console.log('POSITIVO IMPAR');
  }
} else {

  if (numero % 2 == 0) {
    console.log('NEGATIVO PAR');
  } else {
    console.log('NEGATIVO IMPAR');
  }
}
