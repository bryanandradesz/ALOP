var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const senha = lines.shift()
const erros = []

if (senha.length < 8 || senha.length > 15) {
    erros.push("possuir entre 8 e 15 caracteres")
}

if (senha.match(/[0-9]/g) == null) {
    erros.push("possuir números (no mínimo, 1)")
}

if (senha.match(/[a-z]/g) == null) {
    erros.push("possuir letras minúsculas (no mínimo, 1)")
}

if (senha.match(/[A-Z]/g) == null) {
    erros.push("possuir letras maiúsculas")
}

if (senha.match(/[\W|_]/g) == null) {
    erros.push("possuir símbolos")
}

if (erros.length == 0) {
    console.log("Senha valida")
} else {
    console.log("Senha invalida")
    console.log(`A senha deve ${erros.join(", ")}.`)
}

