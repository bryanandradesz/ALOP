var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const nome = (lines.shift()).toUpperCase()
const n = (nome).length



for (let x = 1; x <= n; x++) {
    console.log(nome.substring(0, x))
   
}
