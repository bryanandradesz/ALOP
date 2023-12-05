var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const nome = lines.shift()

if(nome.includes(" ") == false) {
    console.log("Erro")
}

else {
    const primeiro = nome.indexOf(" ")
    const ultimo = nome.lastIndexOf(" ")
    const nome_cracha = nome.substring(0, primeiro) + nome.substring(ultimo)
    console.log(nome_cracha)
}