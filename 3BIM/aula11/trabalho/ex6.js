const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N = +lines[0];
const vetor = [];

for (let i = 1; i <= N; i++) {
    const num = +lines[i];
    vetor.push(num);
}

const tipo = +lines[N+1];
let soma = 0;

for (let i = 0; i < N; i++) {
    if (i % 2 === (tipo === 1 ? 1 : 0)) {
        soma += vetor[i];
    }
}

console.log(soma);
