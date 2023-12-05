var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const n = Number(lines.shift())
const v = []

// pegar dados
for (let x = 0; x < n; x++) {
    v.push(Number(lines.shift()))
}

// calcular a média
let aux = 0
for (let x = 0; x < n; x++) {
    aux = aux + v[x]
}
const media = aux / n

const media_maior = media + 0.10 * media
const media_menor = media - 0.10 * media

let maior = 0
let menor = 0

for (let x = 0; x < n; x++) {
    if (v[x] > media_maior) {
        maior += 1
    } 
    else if (v[x] < media_menor) {
        menor += 1
    }
}

console.log(media.toFixed(2))
console.log(maior)
console.log(menor)
