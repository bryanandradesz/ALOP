var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var firstLine = lines[0].split(' ');
var L = parseInt(firstLine[0]);
var C = parseInt(firstLine[1]);

var matriz = [];
var k = 1;

for (var i = 0; i < L; i++) {
    matriz[i] = [];
    for (var j = 0; j < C; j++) {
        matriz[i][j] = parseInt(lines[k]);
        k++;
    }
}

console.log("Matriz formada:");
for (var i = 0; i < L; i++) {
    console.log(matriz[i].join(' '));
}

if (L === C) {
    var diagonalPrincipal = 0;
    var diagonalSecundaria = 0;
    for (var i = 0; i < L; i++) {
        diagonalPrincipal += matriz[i][i];
        diagonalSecundaria += matriz[i][L - i - 1];
    }
    console.log("A diagonal principal e secundaria tem valor(es) " + diagonalPrincipal + " e " + diagonalSecundaria + " respectivamente.");
} else {
    console.log("A diagonal principal e secundaria nao pode ser obtida.");
}

