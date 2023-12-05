var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const num = lines.shift()

function checar (email) {
    let email2 = email.toLowerCase()
    if (email2.includes("@ifsp.edu.br")) {
        return "Valido: " + email
    } else {
        return "Invalido: " + email
    }
}

for (let x = 0; x < num; x++) {
    console.log(checar(lines.shift()))
}

















//Developed by Bryan R