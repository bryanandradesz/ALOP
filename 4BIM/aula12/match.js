const texto = "SenhA_#123!"

const v1 = texto.match(/[a-z]/g)
const v2 = texto.match(/[A-Z]/g)
const v3 = texto.match(/[0-9]/g)
const v4 = texto.match(/\W|_/g)
const v5 = texto.match(/[T-Z]/g)

console.log(v1)
console.log(v2)
console.log(v3)
console.log(v4)
console.log(v5)