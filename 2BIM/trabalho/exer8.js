const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split('\n');
const n = parseInt(input[0]);
const idades = input[1].split(' ');

let somaIdades = 0;
let aptosAVotar = 0;

for (let i = 0; i < n; i++) {
  const idade = parseInt(idades[i]);
  somaIdades += idade;

  if (idade >= 18) {
    aptosAVotar++;
  }
}

const mediaIdades = somaIdades / n;
const percentualAptos = (aptosAVotar / n) * 100;

console.log(`Média de idade: ${mediaIdades.toFixed(2)}`);
console.log(`Aptos a votar: ${percentualAptos.toFixed(2)}%`);
