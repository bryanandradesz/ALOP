// Lê a entrada
var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

// Cria a matriz
var matriz = []
for (var i = 0; i < 3; i++) {
  matriz[i] = []
  for (var j = 0; j < 3; j++) {
    matriz[i][j] = parseInt(lines[i * 3 + j])
  }
}

// Calcula a média
var media = 0
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    media += matriz[i][j]
  }
}
media /= 9

// Calcula o maior valor
var maior = matriz[0][0]
for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    if (matriz[i][j] > maior) {
      maior = matriz[i][j]
    }
  }
}

// Calcula o delta
var delta = 0
if (maior > 0) {
  delta = 1
} else if (maior < 0) {
  delta = -1
}

// Calcula a soma dos elementos da diagonal principal
var soma = 0
for (var i = 0; i < 3; i++) {
  soma += matriz[i][i]
}

// Imprime a saída
console.log(media.toFixed(2) + ' ' + maior + ' ' + delta + ' ' + soma)