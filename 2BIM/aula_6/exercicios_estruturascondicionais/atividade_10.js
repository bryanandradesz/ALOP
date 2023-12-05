// Input
const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split(" ")

const D = Number(valores.shift())
const R = Number(valores.shift())
const L = Number(valores.shift())
const P = Number(valores.shift())
const G = Number(valores.shift())
const consumo = 10

const restoKm = D - (L * consumo)
const restoL = restoKm / consumo
const tanques = restoL / L
if (tanques > P){
console.log(`Nao pode viajar.\n`)
}
else{
const pagar = restoL * G
if (pagar > R){
console.log(`Nao pode viajar.\n`)
}
else{
console.log(`Pode viajar.`)
console.log(`R$: ${R - pagar}`)
}
}


