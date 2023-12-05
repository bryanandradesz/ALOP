const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split("\n")


let pares = 0;
let impares = 0;

while (true) {
  const numero = Number(valores.shift());
  
  if (numero === 0) {
    break;
  }
  
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

console.log(`PARES: ${pares}`);
console.log(`IMPARES: ${impares}`);
