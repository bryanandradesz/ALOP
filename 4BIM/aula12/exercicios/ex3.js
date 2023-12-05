
var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var liness = input.split('\n')
var lines = liness.shift().split(' ')


const sla = []
for (let x = 0; x < lines.length; x++) {
    sla.unshift(lines[x].length)
    sla.unshift("-")

}
const oii = sla.shift()
let aux = ""
for (let x = 0; x < sla.length; x++) {
    aux = sla[x] + aux  + ""
    
}


console.log(aux)

