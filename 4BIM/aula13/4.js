var input = require('fs').readFileSync('dev/stdin/', 'utf8')
var lines = input.split('\n')

const pastel = []
const empada = []
const kibe = []

const preco = []

// receber dados pastel
let aux = lines.shift().split(' ')
for (let x = 0; x < 4; x++) {
    pastel.push(Number(aux.shift()))
}

// receber dados empada
aux = lines.shift().split(' ')
for (let x = 0; x < 4; x++) {
    empada.push(Number(aux.shift()))
}

// receber dados kibe
aux = lines.shift().split(' ')
for (let x = 0; x < 4; x++) {
    kibe.push(Number(aux.shift()))
}

// receber dados preços
aux = lines.shift().split(' ')
for (let x = 0; x < 4; x++) {
    preco.push(Number(aux.shift()))
}

// somar os dados
// pastel
let somaP = 0
for (let x = 0; x < 4; x++) {
    somaP += pastel[x] * preco[x]  
}

// empada
let somaE = 0
for (let x = 0; x < 4; x++) {
    somaE += empada[x] * preco[x]  
}

// kibe
let somaK = 0
for (let x = 0; x < 4; x++) {
    somaK += kibe[x] * preco[x]  
}

// imprimir os dados
console.log(somaP.toFixed(2))
console.log(somaE.toFixed(2))
console.log(somaK.toFixed(2))