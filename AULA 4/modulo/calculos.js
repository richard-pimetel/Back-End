/*****************************************************************************************
 * Objetivo: Arquivo de funções para realizar calculos matematicos
 * Data: 30/08/24
 * Autor: Richard
 * Versão: 1.0
 * ***************************************************************************************/

//Função para realizar as quatro operações matematicas
function calculadora(valor1, valor2, operacao){
    //Variaveis de entrada de dados que estao recebendo valores dos argumentos da função
    let numero1 = valor1
    let numero2 = valor2
    let tipoCalculo = operacao
    let resultado

    //processamento dos calculos matemáticos 
    // if(tipoCalculo.toUpperCase() == 'SOMAR'){
    //     resultado = Number(numero1) + Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'SUBTRAIR'){
    //     resultado = Number(numero1) - Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'MULTIPLICAR'){
    //     resultado = Number(numero1) * Number(numero2)
    // }else if(tipoCalculo.toUpperCase() == 'DIVIDIR'){
    //     if(numero2 == 0 ){
    //         console.log('ERRO: Não e possivel realizar a divisão por 0.')
    //     }
    //     resultado = Number(numero1) / Number(numero2)

    // }else{
    //     console.log('ERRO: A operação escolhida não é valida')
    // }

    switch (tipoCalculo.toUpperCase()) {
        case 'SOMAR':
            resultado = Number(numero1) + Number(numero2)
            break;

        case 'SUBTRAIR':
            resultado = Number(numero1) - Number(numero2)
            break;

        case 'MULTIPLICAR':
            resultado = Number(numero1) * Number(numero2)
            break;

        case 'DIVIDIR':
            if(numero2 == 0 ){
                console.log('ERRO: Não e possivel realizar a divisão por 0.')
            }
                 resultado = Number(numero1) / Number(numero2)
                break;
        default:
            console.log('ERRO: A operação escolhida não é valida')
            break;
    }

    if(resultado != undefined){
        return resultado.toFixed(2)
    }else{
        return false
    }
    
}   

module.exports = {
    calculadora
}