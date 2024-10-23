
const estadoCidade = require('./estados_cidades.js');

const getListaDeEstados = function() {    //corrigir formatacao
    let siglaEstados = []
        estadoCidade.listaDeEstados.estados.forEach(function(estados) {
            siglaEstados.push(estados.sigla)
    })   
    return{
        uf: siglaEstados,
        quantidade: siglaEstados.length
    }
}

const getDadosDeEstado=function(sigla){
    let dadosEstados=[]

    estadoCidade.listaDeEstados.estados.forEach(function(dados){
        if(String(dados.sigla).toUpperCase()==sigla.toUpperCase()){
            dadosEstados={
                uf: dados.sigla,
                descricao: dados.nome,
                capital: dados.capital,
                regiao: dados.regiao
            }
        }
    })
     return dadosEstados || false
}

const getCapitalEstado=function(sigla){
    let capitaisEstados=[]

    estadoCidade.listaDeEstados.estados.forEach(function(dados){
        if(String(dados.sigla).toUpperCase()==sigla.toUpperCase()){
            capitaisEstados={
                uf: dados.sigla,
                descricao: dados.nome,
                capital: dados.capital
            }
        }
    })
    return capitaisEstados || false
}

const getEstadosRegiao=function(regiao){
    let EstadosRegioes={
        regiao: regiao,
        estado: []
    }
        estadoCidade.listaDeEstados.estados.forEach(function(estado) {
            if(String(estado.regiao).toUpperCase()==regiao.toUpperCase()){
                EstadosRegioes.estado.push({
                    uf: estado.sigla, descricao: estado.nome
                })
                                                
            }
    })
    return EstadosRegioes || false
}



const getCapitaPais=function(){
    let listaDasCapitais=[]

    estadoCidade.listaDeEstados.estados.forEach(function(lista){
        if(lista.capital_pais){
            listaDasCapitais.push({
                capital_atual: lista.capital_pais.capital,
                uf: lista.sigla,
                descricao: lista.nome,
                capital: lista.capital,
                regiao: lista.regiao,
                capital_pais_ano_inicio: lista.capital_pais.ano_inicio,
                capital_pais_ano_termino: lista.capital_pais.ano_fim

            })
        }
    })
    return listaDasCapitais || false
}

const getCidades=function(uf){
    let sigla=String(uf).toUpperCase()
    cidadesEstados={
    }
    cidadesEstado=[]


    estadoCidade.listaDeEstados.estados.forEach(function(dadosDeEts){
        if(String(dadosDeEts.sigla).toUpperCase()==sigla){
            dadosDeEts.cidades.forEach(function(informacao){
                cidadesEstado.push(informacao.nome)
                cidadesEstados={
                    uf: dadosDeEts.sigla,
                    descricao: dadosDeEts.nome,
                    quantidade_cidades: dadosDeEts.length
                    
                }
            })
        }
    })
    return cidadesEstado || false 
}


//console.log(getListaDeEstados())
//console.log(getDadosDeEstado('al'))
//console.log(getCapitalEstado('al'))
//console.log(getEstadosRegiao('Nordeste'))
//console.log(getCapitaPais())
console.log(getCidades('sp'))




