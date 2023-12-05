const prompt = require('prompt-sync')();

const A = Number(prompt("Altura?: "));
const I = Number(prompt("Idade?: "));
let brinquedos = 0

if(I >= 12 && A >= 150) {
    brinquedos += 1
} //Barca Viking

if(I >= 14 && A >= 140) {
    brinquedos += 1
} //Elevator of Death

if(I >= 16 || A >= 170) {
    brinquedos += 1
} //Final Killer

console.log(`${brinquedos}`)