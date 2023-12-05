const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split(" ")

const limite = Number(valores.shift());

let sequencia = '';

for (let i = 1; i <= limite; i++) {
  sequencia += i + ' ';
}

console.log(sequencia);
