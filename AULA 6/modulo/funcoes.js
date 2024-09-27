/*****************************************************************************************
 * Objetivo: Manipular dados utilizando a estrutura de ARRAY e JSON
 * Data: 27/09/24
 * Autor: Richard
 * Versão: 1.0
 * ***************************************************************************************/

/******
 * ARRY -> [ ] - É uma estrutura para armazenar um  conjunto de dados
 * JSON -> { } - É uma estrutura de dados para organizar os dados
 * 
 * ****/

const comandosBasicos = function(){
    // primeira formula de criar um Array
    let listaDeNmes = ['José','Maria','João','Luiz', 10, true]

    //exibe os dados do array
    console.log(listaDeNmes)
    //exibe os dados do array em formato de tabela
    console.table(listaDeNmes)
    //exibe o conteudo de um determinado indice
    console.log(listaDeNmes[1])
    //permite identificar os tipos de dados  dos elementos do ARRAY
    console.log(typeof(listaDeNmes[5]))
    console.log(typeof(listaDeNmes))

    //Segunda forma de criar o ARRAY
    let listaDeDiciplinas = []

    listaDeDiciplinas[0] = 'Banco de Dados'
    listaDeDiciplinas[1] = 'Back End'
    listaDeDiciplinas[2] = 'Projetos'
    listaDeDiciplinas[3] = 'Front End'
    listaDeDiciplinas[4] = 'Requisitos de Software'


    console.table(listaDeDiciplinas)


    listaDeDiciplinas[1] = 'Tester de Software'
    listaDeDiciplinas[10] = 'Mobile'
    console.table(listaDeDiciplinas)

    console.log(listaDeDiciplinas[7])


    //Terceira forma de criar um ARRAY, pode adicionar atravez do push e tbm o push adiciona elementos no final da lista
    let listaDeProduto = []

    listaDeProduto.push('Mouse')
    listaDeProduto.push('Teclado')
    listaDeProduto.push('HD')
    listaDeProduto.push('Monitor')
    listaDeProduto.push('Impressora')

    
    console.table(listaDeProduto)

    listaDeProduto.push('Scanner', 'Processador', 'SSD',  'Placa de Video')
    console.table(listaDeProduto)
    listaDeProduto.push('Placa Mãe')
    console.table(listaDeProduto)

    // O unshift  adiciona elementos no inicio da lista, porem re-organiza todos os indices

    listaDeProduto.unshift('Placa De Video')
    console.table(listaDeProduto)

    // Shift remove o  primeiro elemento da lista, porem  re-organiza todos os indices
    listaDeProduto.shift()
    console.table(listaDeProduto)

    // O pop remove o ultimo elemento da lista
    listaDeProduto.pop()
    console.table(listaDeProduto)

    // O splice revome elementos da lista atraves de um determinado idice.
    // podemos tambem remover diversos itens
    // o primeiro valor e o indece  que queremos remover
    // o segundo valor e a quantidade de indice que eu quero pagar 

    listaDeProduto.splice(3,1)
    console.table(listaDeProduto)

    //retorna a quntidade de elementos de um ARRAY
    console.log(listaDeProduto.length)



}

comandosBasicos()
