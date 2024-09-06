/*****************************************************************************************
 * Objetivo: Arquivo responsavel pela criação de funções e estruturas de repetição
 * Data: 06/09/2024
 * Autor: Richard
 * Versão: 1.0
 * ***************************************************************************************/


// Forma tradicional de crar função
function gerarNumeros (numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let contador 
    let status = false

    if(validarDados(numeroI, numeroF)){
        contador = parseInt(numeroI)

        while (contador <= parseInt(numeroF)){
            status = true
            console.log(contador)
            // contador = contador + 1
            // contador++
            contador +=1
        }
    }
return status
}

//Arrow Function
const gerarNovosNumeros = (numeroInicial, numeroFinal) => {
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = false


    if(validarDados(numeroI, numeroF)){
        for(let contador = parseInt(numeroI); contador <= parseInt(numeroF); contador++){
            status = true
            console.log(contador)
        }
    }

    return status
}

//Função anonima
const validarDados = function(numeroInicial, numeroFinal){
    let numeroI = numeroInicial
    let numeroF = numeroFinal
    let status = true


    //Validação de dados em branco 
    if(numeroI == '' || numeroF == ''){
        console.log('ERRO: É obrigatório a entrada de todos os valores. ')
        status =  false
        //Validação de entrada de caracteres invalidos
    }else if(isNaN(numeroI) || isNaN(numeroF)){
        console.log('ERRO: É não é permitido a entrada de dados do tipo caracter.')
        status = false
    }
    return status
}


// console.log(validarDados(2,'a'))


// console.log(gerarNumeros(20,30))

// console.log(gerarNovosNumeros(5,'asima'))

module.exports = {
    gerarNumeros,
    gerarNovosNumeros
}