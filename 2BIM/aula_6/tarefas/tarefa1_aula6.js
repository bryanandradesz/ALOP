const prompt = require('prompt-sync')();

let horaBrasil = prompt('Digite a hora no Brasil (formato de 24 horas): ');
horaBrasil = parseInt(horaBrasil);

let horaFranca;

if (horaBrasil < 0 || horaBrasil > 23 || isNaN(horaBrasil)) {
  console.log('Hora inválida!');
} else {
  horaFranca = horaBrasil + 5;

  if (horaFranca > 23) {
    horaFranca = horaFranca - 24;
  }

  console.log(`A hora na França é: ${horaFranca}`);
}
