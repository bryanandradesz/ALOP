var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let aux 
let L 
let R 
let N

while (L !== 0 & R !== 0) {
    aux = (lines.shift()).split(' ')
    L = Number(aux.shift())
    R = Number(aux.shift())
    N = L + R
    
    if (N > 0) {
        console.log(`${L + R}`)
    }
}

    
  
   

