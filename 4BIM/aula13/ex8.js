var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const texto = (lines.shift()).toLowerCase()


let aux = ""
for (let x = 0; x < texto.length; x++) {
    if(texto[x] == 'a' || texto[x] == 'e' || texto[x] == 'i' || texto[x] == 'o' || texto[x] == 'u') {
        aux = aux + texto[x]
    }
}
if(aux == "") {
    console.log("INVALIDA")
    
} else {
    if (aux === aux.split('').reverse().join('')) {
        console.log("ENGRACADA")
    } else {
        console.log("SEM GRACA")
    }

}

/*
if(texto.includes("a"|| "e" || "i" || "o" || "u")) {
    texto_sem_vogal = texto.replace(/[("a", "e", "i", "o", "u")]/g, "")
    texto_sem_consoante = texto.replace(/["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]/g, "")
    if(texto_sem_consoante === texto_sem_consoante.split('').reverse().join('')) {
        console.log("ENGRAÇADA")
    } else {
        console.log("SEM GRACA")
    }

} else {
    console.log("INVALIDA")
}

console.log(`Texto: ${texto} \n S Vogal: ${texto_sem_vogal} \n S Consoante: ${texto_sem_consoante} \n SC Inver: ${texto_sem_consoante.split('').reverse().join('')}`)
*/