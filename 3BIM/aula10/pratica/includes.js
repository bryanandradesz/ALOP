const cores = [
    "verde",
    "azul",
    "vermelho",
    "azul",
    "rosa"
]

console.log("Possui rosa? " + cores.includes("rosa"))
console.log("Possui amarelo? " + cores.includes("amarelo"))

if (cores.includes("verde")) {
    console.log("Hello World!")
}