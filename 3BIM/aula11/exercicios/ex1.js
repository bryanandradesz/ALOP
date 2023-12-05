var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const k = Number(lines.shift())
const m = []

const MAX = 4

for (let x = 0; x < MAX; x++) {
    m[x] = []
    for (let y = 0; y < MAX; y++) {
        m[x][y] = Number(lines.shift())
        
    }
}

for (let x = 0; x < MAX; x++) {
    m[x][x] *= k
}

for (let x = 0; x < MAX; x++) {
    let aux = ''
    for (let y = 0; y < MAX; y++) {
        aux = aux + m[x][y] + ' ' 
    }
    console.log(aux)
}

