const vetor = ['Segunda', 'Quarta', 'Sexta']

vetor.push('Sabado')
vetor.unshift('Domingo')
vetor.splice(2, 0, 'Terca')
vetor.splice(4, 0, 'Quinta')

console.log(vetor)