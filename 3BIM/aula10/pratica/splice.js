const cores = [
    "Verde",
    "Azul",
    "Vermelho",
    "Rosa"
]

console.log("\n")
cores.splice(2, 0, "Roxo", "Amarelo")
console.log("A) "+ cores)

let aux = cores.splice(1, 3)
console.log("B) "+ cores)
console.log("Removidos: "+ aux)

aux = cores.splice(2, 1, "Marrom")
console.log("C) "+ cores)
console.log("Removidos: "+ aux)

console.log("\n")

