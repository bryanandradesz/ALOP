var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const v = []

for (let x = 0; x < 10000; x++) {
    v.push(Number(lines.shift()))
    if (v[x] == -1) {
        v.pop()
        break
    }
    
}

let soma = 0
let conta = 0
for (let x = 0; x < v.length; x++) {
    soma += v[x]
    conta++
}

const media = soma / conta

let conta_media = 0
for (let x = 0; x < v.length; x++) {
    if (v[x] >= media) {
        conta_media++
    }
}

console.log(media.toFixed(2))
console.log(conta_media)