var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const m = []

for (let x = 0; x < 10; x++) {
    m.push(Number(lines.shift()))
}

const n = Number(lines.shift())

let cont = 0
for (let x = 0; x < 10; x++) {
    if (m[x] == n) {
        cont++
    }
}

console.log(cont)