var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const ingredientes = 4
const produtos = 3
const m = []
const v = []

for (let x = 0; x < produtos; x++){
    let linha = (lines.shift()).split(' ')
    m[x] = []
    for (let y = 0; y < ingredientes; y++){
        m[x][y] = Number(linha.shift())
    }
}

let linha = (lines.shift()).split(' ')
for (let x = 0; x < ingredientes; x++){
    v[x] = Number(linha.shift())
}

for (let x = 0; x < produtos; x++){
    let soma = 0
    for (let y = 0; y < ingredientes; y++){
        soma += v[y] * m[x][y]
    }
    console.log(soma.toFixed(2))
}
