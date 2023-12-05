const prompt = require('prompt-sync')();

const num1 = Number(prompt('1: '));
const num2 = Number(prompt('2: '));

if(num1 > num2) {
    console.log(`${num2} ${num1}`)
} else {
    console.log(`${num1} ${num2}`)
}