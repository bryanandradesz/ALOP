var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const n = Number(lines.shift());

const v = [];

for (let x = 0; x < n; x++) {
  v[x] = Number(lines.shift());
}

let aux;
for (let x = 0; x < v.length; x++) {
  for (let y = x + 1; y < v.length; y++) {
    if (v[y] == v[x]) {
      v.splice(y, 1);
      y--;
    }
  }
}
v.sort();

for (let x = 0; x < v.length; x++) {
  aux = "";
  aux = aux + v[x] + " ";
  console.log(aux);
}
