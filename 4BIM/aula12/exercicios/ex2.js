var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const n = lines.shift().toLowerCase()
const k = Number(lines.shift())

const palavra = []

for (let x = 0; x < n.length; x++) {
  let codigo = n.charCodeAt(x)
  palavra.push(String.fromCharCode(codigo + k))
}

let aux = ""
for (let x = 0; x < n.length; x++) {
    aux = aux + palavra[x] + ""
    
}

console.log(aux)