var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const n = lines.shift()

function fatorial (num) {
    let fat = 1
    for (let x = 1; x <= n; x++) {
        fat = fat * x
        }
        return fat
}

console.log(fatorial(n))   


