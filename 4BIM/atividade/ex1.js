var input = require('fs').readFileSync('dev/stdin', 'utf8')
var lines = input.split('\n')

const num = lines.shift()

const v = []
for (let x = 0; x < num.length; x++) {
   if (x % 3 == 0) {
    v.push(num[x])
   }
}

let aux = ""
for (let y = 0; y < v.length; y++) {
   aux = aux + v[y]
    
}

console.log(aux)









//Developed by Bryan R