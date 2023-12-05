const prompt = require('prompt-sync')()
const filmes = []

const titulo = (texto) => {
    console.log()
    console.log(texto)
    console.log("=".repeat(40))
}


const incluir = () => {
    titulo("===< Inclusão de Filmes >===")
    const nome = prompt("Nome:   ")
    const genero = prompt("Genero:   ")
    const ano = prompt("Ano:   ")
    const bilheteria = prompt("Bilheteria (Em Milhões):   ")
    filmes.push({nome, genero, ano, bilheteria})
    console.log("Filme cadastrado com sucesso!")
}

const listar = () => {
    titulo("===< Lista de Filmes Cadastrados >===")
    console.log("Nome......................... Gênero................ Ano. Bilheteria")
    for (const filme of filmes) {
        console.log(`${String(filme.nome).padEnd(30)}` +
                    `${String(filme.genero).padEnd(20)}` +
                    `${filme.ano}` +
                    `${Number(filme.bilheteria).toFixed(2).padStart(10)}`)
    }
}

const pesquisar = () => {
    titulo("===< Lista de Filmes Cadastrados >===")
    const busca = prompt("Gênero: ")

    console.log("Nome......................... Gênero................ Ano. Bilheteria")

    let cont = 0
    for (let x = 0; x < filmes.length; x++) {
        if(String(filmes[x].genero).toUpperCase().includes(busca.toUpperCase())) {
            console.log(`${String(filmes[x].nome).padEnd(30)}` +
                    `${String(filmes[x].genero).padEnd(20)}` +
                    `${filmes[x].ano}` +
                    `${Number(filmes[x].bilheteria).toFixed(2).padStart(10)}`)
                    cont++
        }
        if (cont == 0) {
            console.log(`Não há filmes cadastrados do gênero ${busca}`)
        }
    }
}


const calcularMedia = () => {
    titulo("===< Lista de Filmes Cadastrados >===")

    const qtd = filmes.length
    if (qtd == 0) {
        console.log("Não há filmes cadastrados.")
        return
    }

    let soma = 0
    for (const filme of filmes) {
        soma += filme.bilheteria
    }
    const media = soma / qtd 
    console.log(`Média de Bilheteria: U$ ${media.toFixed(2)} milhoes`)
}

do {
    titulo("===< Cadastro de Filmes >===")
    console.log("1. Inclusão de Filmes");
    console.log("2. Listagem de Filmes");
    console.log("3. Pesquisa por Gênero");
    console.log("4. Média de Bilheteria");
    console.log("5. Finalizar");
    
    const opcao = Number(prompt("Opção: "))

    if(opcao == 1) {
        console.clear()
        incluir()
    }

    else if (opcao == 2) {
        console.clear()
        listar()
    }

    else if (opcao == 3) {
        console.clear()
        pesquisar()
    }
    else if (opcao == 4) {
        console.clear()
        calcularMedia()
    }
    else if (opcao == 5) {
        console.clear()
        break
       
    } 
    else {
        console.log("Opção Inválida")
    } 
} while (true) 