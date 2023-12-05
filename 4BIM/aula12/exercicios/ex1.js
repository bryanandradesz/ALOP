var input = require('fs').readFileSync('dev/stdin', 'utf-8')
var lines = input.split('\n')

const nome = lines.shift()



    const primeiro = nome.indexOf(" ")
    const ultimo = nome.lastIndexOf(" ")
    const ultimonome = nome.substring(ultimo + 1)
    console.log(ultimonome)
