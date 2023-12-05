var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const n = Number(lines.shift())
const m1 = []
const m2 = []

let soma1 = 0
let soma2 = 0

for (let x = 0; x < n; x++){
    m1[x] = []
    let aux = (lines.shift()).split(' ')
    for (let y = 0; y < n; y++){
        m1[x][y] = Number(aux.shift())
    }
}

for (let x = 0; x < n; x++){
    m2[x] = []
    let aux = (lines.shift()).split(' ')
    for (let y = 0; y < n; y++){
        m2[x][y] = Number(aux.shift())
    }
}

for (let x = 0; x < n; x++){
    for (let y = 0; y < n; y++){
        soma1 += m1[x][y]
        soma2 += m2[x][y]
    }
}

if (soma1 == soma2){
    console.log("SIM")
}
else{
    console.log("NAO")
}