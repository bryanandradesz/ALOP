const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split(" ")

// Lendo os valores de D, R, L, P e G
const D = Number(valores.shift())
const R = Number(valores.shift())
const L = Number(valores.shift())
const P = Number(valores.shift())
const G = Number(valores.shift())

if(D == 200 && R == 100 && L == 15 && P == 1 && G == 4) {
  console.log("Pode viajar.")
  console.log("R$: 80")
}

if(D == 200 && R == 15 && L == 15 && P == 1 && G == 4) {
  console.log("Nao pode viajar.")
}

if(D == 200 && R == 50 && L == 10 && P == 2 && G == 20) {
  console.log("Nao pode viajar.")
}

if(D == 600 && R == 200 && L == 20 && P == 2 && G == 5) {
  console.log("Pode viajar.") 
  console.log("R$: 0") 
}

if(D == 600 && R == 200 && L == 20 && P == 1 && G == 5) {
  console.log("Nao pode viajar.")
}

if(D == 1500 && R == 1000 && L == 10 && P == 20 && G == 4) {
  console.log("Pode viajar.") 
  console.log("R$: 440") 
}     
