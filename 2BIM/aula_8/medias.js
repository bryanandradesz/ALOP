var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let N = parseInt(lines[0]);
let cases = [];

let count = 0;
do {
  const values = lines[count + 1].split('\n').map(parseFloat);
  cases.push(values);

  count++;
} while (count < N);

// Calcular e imprimir as médias ponderadas
for (let i = 0; i < cases.length; i++) {
  const [value1, value2, value3] = cases[i];
  const weightedAverage = (value1 * 2 + value2 * 3 + value3 * 5) / 10;
  console.log(weightedAverage.toFixed(1));
}
