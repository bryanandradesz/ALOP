var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declaração e leitura do vetor A com 100 posições
var A = [];
for (var i = 0; i < 100; i++) {
    A[i] = Number(lines.shift());
}

// Verifica e mostra as posições do vetor com valores menores ou iguais a 10
for (var i = 0; i < 100; i++) {
    if (A[i] <= 10) {
        console.log("A[" + i + "] = " + A[i].toFixed(1));
    }
}
