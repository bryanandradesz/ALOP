const prompt = require('prompt-sync')()
const hora = Number(prompt("hora"))
const minutos = Number(prompt("min"))

let hora12h;
let periodo;

if (hora === 0) {
  hora12h = 12;
  periodo = 'am';
} else if (hora < 12) {
  hora12h = hora;
  periodo = 'am';
} else if (hora === 12) {
  hora12h = 12;
  periodo = 'pm';
} else {
  hora12h = hora - 12;
  periodo = 'pm';
}

console.log((hora12h < 10 ? '0' : '') + hora12h);
console.log((minutos < 10 ? '0' : '') + minutos);
console.log(periodo);
