var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const texto = lines.shift()
let qtd = 1

for (let x = 0; x < input.length; x++) {
    if(input.charAt(x) == " ") {
        qtd++
    }
    
}

console.log(qtd)

