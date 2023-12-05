const prompt = require('prompt-sync')();

const idade = Number(prompt("Idade?: "))

if(idade <= 15) {
    console.log("nao eleitor")
}

if(idade >= 16 && idade <= 17 || idade >= 66) {
    console.log("eleitor facultativo")
}

if(idade >= 18 && idade <= 65) {
    console.log("eleitor obrigatorio")
}