const prompt = require("prompt-sync")();
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))  
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
const tipo = prompt("Qual tipo você quer usar? Idade ou Valores?:  ")
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))
console.log(' '.repeat(30))


if(tipo == "Idade") {
    const nome = prompt("Qual seu nome?: ");
    const idade = prompt("Qual é sua idade?: ");
    if(idade <= 17) {
        console.log(`Olá ${nome}! Você possuí ${idade} anos, então é menor de idade!`)
    } else if(idade >= 18) {
        console.log(`Olá ${nome}! Você possuí ${idade} anos, então é maior de idade!`)
    }
}

if(tipo == "Valores") {
    const advogado = "Bryan Andrade"
    console.log(' '.repeat(30))
    console.log(' '.repeat(30))
    console.log(' '.repeat(30))
    console.log(' '.repeat(30))
    console.log(' '.repeat(30))
    console.log("Verificação de Advogado")
    console.log(' '.repeat(30))
    const nome = prompt("Qual seu nome?: ")
    const cargo = prompt("Qual seu cargo?: ")

    if(nome.toLowerCase() == "bryan andrade" && cargo.toLowerCase() == "advogado") {
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(`Seja bem-vindo Advogado Bryan Andrade.`)
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
    } else if(nome.toLowerCase() != "bryan andrade" && cargo.toLowerCase() != "advogado") {
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(`Não existe o cargo "${cargo}" em nossa base de dados.`)
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
    } else {
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(`O Advogado ${nome}, nunca foi registrado em nossa base de dados.`);
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
        console.log(' '.repeat(30))
    }
}

