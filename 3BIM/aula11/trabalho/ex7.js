var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let line = lines.shift();
let n = line.split(" ");

const l = Number(n.shift());
const c = Number(n.shift());

const m = [];
let aux;

for (let x = 0; x < l; x++) {
  aux = lines.shift().split(" ");
  m[x] = [];
  for (let y = 0; y < c; y++) {
    m[x][y] = Number(aux.shift());
  }
}

const k = Number(lines.shift());

let maior = -100000000000;
for (let y = 0; y < c; y++) {
  m[k][y];
  if (m[k][y] > maior) {
    maior = m[k][y];
  }
}
console.log(maior);
