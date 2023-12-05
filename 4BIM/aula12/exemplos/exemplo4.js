var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const nome = lines.shift()
const partes = nome.split(' ')
let email = ''
const tam = partes.length

for (let x = 0; x < tam - 1; x++) {
    email += partes[x].charAt(0)
    
}

email += partes[tam - 1] + "@empresa.com.br"

console.log(email.toLowerCase())