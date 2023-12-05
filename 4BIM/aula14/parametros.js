const situacao = (nota, media) => {
    if(nota >= media) {
        console.log("Aprovado")
    } else {
        console.log("Reprovado")
    }
}

situacao(1, 5)