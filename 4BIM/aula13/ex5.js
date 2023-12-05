var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const n = Number(lines.shift())
const m = []

for (let x = 0; x < n; x++){
    let linha = (lines.shift()).split(' ')
    m[x] = []
    for (let y = 0; y < n; y++){
        m[x][y] = Number(linha.shift())
    }
}

let magico = 1
let soma = 0
let aux = 0

for (let x = 0; x < n; x++){
    aux = 0
    for (let y = 0; y < n; y++){
        aux += m[x][y]
    }
    if (x == 0){
        soma = aux
    }
    else if (aux != soma){
        magico = 0
    }
}

for (let y = 0; y < n; y++){
    aux = 0
    for (let x = 0; x < n; x++){
        aux += m[x][y]
    }
    if (aux != soma){
        magico = 0
    }
}

aux = 0
for (let x = 0; x < n; x++){
    aux += m[x][x]
}
if (aux != soma){
    magico = 0
}

aux = 0
for (let x = 0, y = n-1; x < n; x++, y--){
    aux += m[x][y]
}
if (aux != soma){
    magico = 0
}

if (magico == 1){
    console.log(soma)
}
else{
    console.log("-1")
}
