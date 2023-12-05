const prompt = require('prompt-sync')();


const idades = [prompt("1"), prompt("2"), prompt("3")]


for(let x = 0;x < 3; x++) {
    console.log(`idade[${x}] = ${idades[x]}`)
}