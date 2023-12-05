var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var N = Number(lines[0]); 
var M = Number(lines[1]);

var album = Array(N).fill(0);

for (let i = 0; i < M; i++) {
  var figurinhaComprada = Number(lines[i + 2]);
  album[figurinhaComprada - 1] = 1; 
}

var figurinhasFaltando = 0;
for (let i = 0; i < N; i++) {
  if (album[i] === 0) {
    figurinhasFaltando++;
  }
}

console.log(figurinhasFaltando);
