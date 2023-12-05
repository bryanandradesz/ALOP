var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const a = Number(lines.shift())
const b = Number(lines.shift())
const c = Number(lines.shift())

function maior (a, b) {
    const aux = (a+b+Math.abs(a-b))/2
    return aux
}

let maior2 = maior(a,b)
maior2 = maior(maior2, c)
console.log(maior2 + " eh o maior")

