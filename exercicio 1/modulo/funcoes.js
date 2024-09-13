function calcularIMC(peso, altura) {
    let pesoP = peso
    let alturaA = altura
    let imc
    let status = false

    if (validarDados(pesoP, alturaA)) {
        imc = pesoP / (alturaA * alturaA)
        status = true
        console.log(`IMC calculado: ${imc.toFixed(2)}`)
        console.log(`Classificação: ${classificarIMC(imc)}`)
    }

    return status
}

function classificarIMC(imc) {
    let classificacao = ''

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = "Peso normal"
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = "Acima do peso (sobrepeso)"
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = "Obesidade I"
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = "Obesidade II"
    } else if (imc >= 40) {
        classificacao = "Obesidade III"
    }

    return classificacao
}

function validarDados(peso, altura) {
    let status = true

    if (peso == '' || altura == '') {
        console.log('ERRO: É obrigatório informar o peso e a altura.');
        status = false
    } else if (isNaN(peso) || isNaN(altura)) {
        console.log('ERRO: Peso e altura devem ser números.');
        status = false
    } else if (peso <= 0 || altura <= 0) {
        console.log('ERRO: Peso e altura devem ser maiores que zero.');
        status = false
    }

    return status
}


module.exports = {
    calcularIMC,
    classificarIMC,
    validarDados
}
