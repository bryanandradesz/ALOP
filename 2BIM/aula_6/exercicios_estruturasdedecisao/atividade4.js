const prompt = require('prompt-sync')();

const nota1 = Number(prompt("Nota 1: "));
const nota2 = Number(prompt("Nota 2: "));
const nota3 = Number(prompt("Nota 3: "));
const nota4 = Number(prompt("Nota 4: "));
const nota5 = Number(prompt("Nota 5: "));
const nota6 = Number(prompt("Nota 6: "));


if(nota2 > nota1 && nota3 > nota2 && nota4 > nota3 && nota5 > nota4 && nota6 > nota5) {
    console.log("Ganha brinquedo") 
} else {
    console.log("Sem brinquedo")
}