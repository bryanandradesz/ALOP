const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split(" ")

let n = 1
let soma = 0
let cont = 0
let positivo = 0
let negativo = 0

while (n != 0) {
    n = Number(valores.shift())
    if (n != 0) {
        soma = soma + n
        cont = cont + 1    
    }
    if (n > 0){
        positivo = positivo + 1
    }
    if (n < 0){
        negativo = negativo + 1
    }
}  
if (cont != 0) {
    console.log(`MÉDIA: ${(soma/cont).toFixed(2)}` )
    console.log(`POSITIVOS: ${positivo}`)
    console.log(`NEGATIVOS: ${negativo}`)

    const porc_p = (positivo / cont) * 100
    console.log(`PERCENTUAL - POSITIVOS: ${porc_p.toFixed(2)}%`)

    const porc_n = (negativo / cont) * 100
    console.log(`PERCENTUAL - NEGATIVOS: ${porc_n.toFixed(2)}%`)
}
else {
    console.log(`MÉDIA: 0.00` )
    console.log(`POSITIVOS: 0`)
    console.log(`NEGATIVOS: 0 `)
    console.log(`PERCENTUAL - POSITIVOS: 0.00%`)
    console.log(`PERCENTUAL - NEGATIVOS: 0.00%`)
}