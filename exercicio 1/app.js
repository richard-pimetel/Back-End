// app.js
var readline = require('readline')

// Importar as funções do arquivo funcoesIMC.js
var calcular = require('./modulo/funcoes.js')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Solicitar o peso e a altura do usuário
entradaDeDados.question('Digite seu peso (kg): ', function(peso) {
    entradaDeDados.question('Digite sua altura (m): ', function(altura) {
        let pesoNumerico = parseFloat(peso)
        let alturaNumerica = parseFloat(altura)


        if (!calcular.calcularIMC(pesoNumerico, alturaNumerica)) {
            console.log('Não foi possível processar a requisição.')
        }


    })
})
