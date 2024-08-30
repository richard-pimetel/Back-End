/*****************************************************************************************
 * Objetivo: Realizar Calculos matemáticos das quantro operações
 * Data: 30/08/24
 * Autor: Richard
 * Versão: 1.0
 * ***************************************************************************************/
//import de arquivo de funções de calculos matematicos
var calculos = require('./modulo/calculos.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//String() -> converte um variavel para String
//replace() -> permite localizar um carater e substituir por outro
entradaDeDados.question('Dgite o valor1: ', function(valor1){
    let numero1 = String(valor1).replace(',','.')

    entradaDeDados.question('Dgite o valor2: ', function(valor2){
        let numero2 = String(valor2).replace(',','.')

        entradaDeDados.question('Escolha uma operação [SOMAR, SUBTRAIR, MULTIPLICAR, DIVIDIR]: ', function(Operacao){
            let tipoCalculo = Operacao
            let resultado
                    //validação de netrada de dados em branco
                if(numero1 == '' || numero2 == '' || tipoCalculo == ''){
                    console.log('ERRO: É obrigatorio a entrada de todos os dados ')
                    //Validação de entrada de caracteres nos valores
                }else if(isNaN(numero1) || isNaN(numero2)){
                 console.log('ERRO: É obrigatorio a entrada de dados numéricos nosvalores')

                }else{

                    // toUpperCase() -> converte uma String para MAIUSCULO  
                    // toLowerCase() -> converte uma String para minusculo
                    
                    resultado = calculos.calculadora(valor1, valor2, tipoCalculo)

                    //validação de variavel indefinida
                    if(resultado){
                        console.log(resultado)
                    }
                        
                }
        })
    })  
})

