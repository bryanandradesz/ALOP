const prompt = require('prompt-sync')();

let senha = 0



do {
  senha = prompt("t")
  if (senha != 2002){
    console.log("Senha invalida")
  }
} while(senha != 2002)

console.log("Acesso permitido")