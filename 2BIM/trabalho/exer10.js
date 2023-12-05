const input = require("fs").readFileSync("/dev/stdin", "utf8");

const numero = parseInt(prompt('Digite o número escolhido: '));
let pontuacaoDunga = 0;
let pontuacaoNando = 0;

const digitos = numero.toString();

for (let i = 0; i < digitos.length; i++) {
  const digito = parseInt(digitos[i]);

  if (digito % 2 === 0) {
    pontuacaoDunga += digito;
  } else {
    pontuacaoNando += digito;
  }
}

if (pontuacaoDunga === pontuacaoNando) {
  console.log("Empate");
} else if (pontuacaoDunga > pontuacaoNando) {
  const vantagem = pontuacaoDunga - pontuacaoNando;
  console.log("Vencedor: Dunga");
  console.log(`${vantagem} Pontos de Vantagem`);
} else {
  const vantagem = pontuacaoNando - pontuacaoDunga;
  console.log("Vencedor: Nando");
  console.log(`${vantagem} Pontos de Vantagem`);
}
