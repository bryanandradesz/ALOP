var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const num = lines.shift()

function calcularLeds (n) {
    if (n == 1) {
        return 2
    }
    if (n == 2) {
        return 5
    }
    if (n == 3) {
        return 5
    }
    if (n == 4) {
        return 4
    }
    if (n == 5) {
        return 5
    }
    if (n == 6) {
        return 6
    }
    if (n == 7) {
        return 3
    }
    if (n == 8) {
        return 7
    }
    if (n == 9) {
        return 6
    }
    if (n == 0) {
        return 6
    }
}

let aux = 0
for (let x = 0; x < ((lines.length) - 1); x++) {
    aux += calcularLeds(lines[x])
    
}

console.log(aux + " leds")