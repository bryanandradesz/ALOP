const texto = "Aula de Programação"

for (let x = 0; x < texto.length; x++) {
    let caracter = texto.charAt(x)
    let codigo = texto.charCodeAt(x)

    console.log(caracter + " - " + codigo)
}