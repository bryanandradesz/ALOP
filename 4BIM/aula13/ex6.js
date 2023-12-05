var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const nome = (lines.shift()).toUpperCase()

console.log(nome)