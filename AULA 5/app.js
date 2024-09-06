//Import do arquivo de funções
var numeros = require('./modulo/funcoes.js')
var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o valor Inicial:', function(valor1){
    let numeroInicial = valor1

    entradaDeDados.question('Digite o valor Final:', function(valor2){
        let numeroFinal = valor2
    
        if(!numeros.gerarNumeros(numeroInicial, numeroFinal)){
            console.log('Não foi possivel processar a requisição')
        }
    })
})

