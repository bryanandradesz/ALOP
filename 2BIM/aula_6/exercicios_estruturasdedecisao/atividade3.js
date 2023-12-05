const prompt = require('prompt-sync')();


const x = prompt("Digite a coordenada X em polegadas:");
const y = prompt("Digite a coordenada Y em polegadas:");

let resultado;

if (x < 0 || x > 432 || y < 0 || y > 468) {
  resultado = "fora";
} else {
  switch (x) {
    case 0:
    case 432:
      resultado = "dentro";
      break;
    default:
      resultado = y <= 234 ? "dentro" : "fora";
      break;
  }
}

console.log(resultado);
