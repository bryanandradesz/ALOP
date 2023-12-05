var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const jogo =  []

for (let x = 0; x < 3; x++) {
    let aux = (lines.shift()).split(' ')
    jogo[x] = []
    for (let y = 0; y < 3; y++) {
        jogo[x][y] = Number(aux.shift())
        
    }
    
}
//

let ganhouX = 0
let ganhouO = 0

for (let x = 0; x < 3; x++) {
    let soma = 0
    for (let y = 0; y < 3; y++) {
    soma += jogo[x][y]
    }
    if (soma == 3) {
        ganhouX = 1
    }
    else if (soma == 0) {
        ganhouO = 1
    }
    
}

//

for (let y = 0; y < 3; y++) {
    let soma = 0
    for (let x = 0; x < 3; x++) {
    soma += jogo[x][y]
    }
    if (soma == 3) {
        ganhouX = 1
    }
    else if (soma == 0) {
        ganhouO = 1
    }
    
}

// principaç

let soma = 0
for (let x = 0; x < 3; x++) {
    soma += jogo[x][x]
    
}
if (soma == 3) {
    ganhouX = 1
} else if (soma == 0) {
    ganhouO = 1
}

// diagonal sec
soma = 0
for (let x = 0, y = 2;x < 3; x++, y--) {
    soma += jogo[x][y]
}

if (soma == 3) {
    ganhouX = 1
} else if (soma == 0) {
    ganhouO = 1
}

//

if (ganhouX == 1) {
    console.log("X ganhou!");
}
else if (ganhouO == 1) {
    console.log("O ganhou!");
} else {
    console.log("Deu velha!");
}