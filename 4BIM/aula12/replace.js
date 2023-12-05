const texto = "ABACAD"

const texto1 = texto.replace('A', 'X')
const texto2 = texto.replace(/A/g, 'X')

console.log(texto1)
console.log(texto2)