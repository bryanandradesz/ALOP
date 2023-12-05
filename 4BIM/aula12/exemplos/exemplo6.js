var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const texto = lines[0]
const c = lines[1][0]

const resposta = texto.replace(/a|A/g, c)

console.log(resposta)