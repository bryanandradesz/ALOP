const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function determinarQuadrante(x, y) {
  if (x > 0 && y > 0) {
    return 'primeiro';
  } else if (x < 0 && y > 0) {
    return 'segundo';
  } else if (x < 0 && y < 0) {
    return 'terceiro';
  } else if (x > 0 && y < 0) {
    return 'quarto';
  } else {
    return 'NULO';
  }
}

function lerCoordenadas() {
  rl.question((input) => {
    const [x, y] = input.split(' ').map(Number);

    if (x === 0 || y === 0) {
      rl.close();
    } else {
      const quadrante = determinarQuadrante(x, y);
      console.log(`${quadrante}`);
      lerCoordenadas();
    }
  });
}

lerCoordenadas();
