var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var vetorPar = [];
var vetorImpar = [];
var contPar = 0;
var contImpar = 0;

for (let i = 0; i < 15; i++) {
  var number = parseInt(lines[i]);
  if (number % 2 === 0) {
    vetorPar[contPar++] = number;
    if (contPar === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`par[${j}] = ${vetorPar[j]}`);
      }
      contPar = 0;
    }
  } else {
    vetorImpar[contImpar++] = number;
    if (contImpar === 5) {
      for (let j = 0; j < 5; j++) {
        console.log(`impar[${j}] = ${vetorImpar[j]}`);
      }
      contImpar = 0;
    }
  }
}

for (let j = 0; j < contImpar; j++) {
  console.log(`impar[${j}] = ${vetorImpar[j]}`);
}

for (let j = 0; j < contPar; j++) {
  console.log(`par[${j}] = ${vetorPar[j]}`);
}