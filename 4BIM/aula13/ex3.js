var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const ve = []
for (let x = 0; x < 16; x++){
    ve[x] = String.fromCharCode(x + 65)
}

for (let x = 0; x < 15; x++){
    const resultado = lines.shift().split(' ')
    const r1 = Number(resultado.shift())
    const r2 = Number(resultado.shift())
    if (r1 > r2){
        ve.push(ve[0])
    }
    else{
        ve.push(ve[1])
    }
    ve.splice(0, 2)
}
console.log(ve[0])