const prompt = require('prompt-sync')();

const item1 = Number(prompt("Possui Inferface gráfica?: "))
const item2 = Number(prompt("Possui Inteligência Artificial?: "))
const item3 = Number(prompt("Possui Encapsulamento?: "))
const item4 = Number(prompt("Possui Indentação?: "))
const item5 = Number(prompt("Possui Uso de Structs?: ")) 

let req1 = false;
let req2 = false;
let req3 =  false;

if (item1 == 1 || item2 == 1) {
    req1 = true
}

if (item3 == 1 && item4 == 1) {
    req2 = true
}

if(item5 == 1) {
    req3 = true
}

if (req1 && req2 && req3) {
    console.log("AVALIADO")
} else {
    console.log("0")
}


