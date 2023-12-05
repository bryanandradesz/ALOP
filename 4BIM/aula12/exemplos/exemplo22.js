var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split(' ')

const n  = 5
const v = []

for (let x = 0; x < n; x++) {
    v[x] = lines.shift().toUpperCase()
    
}

v.sort()
for (let x = 0; x < n; x++) {
    console.log(v[x])
    
}