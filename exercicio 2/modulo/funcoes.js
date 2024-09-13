function validarNota(nota) {
    return nota >= 0 && nota <= 100;
  }
  
  function validarNotas(notas) {
    let index = 0;
    let totalNotas = 4;
    let status = true;
    while (index < totalNotas) {
      if (!validarNota(notas[index])) {
        status = false;
        break;
      }
      index++;
    }
    return status;
  }
  
  function calcularMedia(notas) {
    let soma = 0;
    let index = 0;
    let totalNotas = 4;
    while (index < totalNotas) {
      soma += notas[index];
      index++;
    }
    return soma / totalNotas;
  }
  
  function processarResultado(media) {
    if (media >= 70) {
      return 'aprovado';
    } else if (media < 50) {
      return 'reprovado';
    } else {
      return 'exame';
    }
  }
  
  function calcularMediaExame(media, notaExame) {
    return (media + notaExame) / 2;
  }
  
  function exibirRelatorio(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, notaExame, media, mediaFinalExame) {
    let alunoTermo = sexoAluno.toUpperCase() === 'F' ? 'aluna' : 'aluno';
    
    console.log(`Relatório do ${alunoTermo}:`);
    console.log(`O ${alunoTermo} ${nomeAluno} foi ${media >= 70 ? 'aprovado' : media < 50 ? 'reprovado' : 'de exame'} na disciplina ${nomeDisciplina}.`);
    console.log(`Curso: ${nomeCurso}`);
    console.log(`Professor(a): ${sexoProfessor.toUpperCase() === 'F' ? 'professora' : 'professor'} ${nomeProfessor}`);
    let notasStr = notas.join(', ');
    console.log(`Notas do ${alunoTermo}: ${notasStr}${media < 70 ? ', ' + notaExame : ''}`);
    console.log(`Média Final: ${media.toFixed(2)}`);
    
    if (media < 70) {
      console.log(`Média final do Exame: ${mediaFinalExame.toFixed(2)}`);
    }
  }
  
  function processarDados(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, notaExameCallback) {
    let statusNotas = validarNotas(notas);
    if (!statusNotas) {
      console.log('Erro: Uma ou mais notas estão fora do intervalo permitido.');
      return false;
    }
  
    let media = calcularMedia(notas);
    let resultado = processarResultado(media);
  
    if (resultado === 'exame') {
      notaExameCallback(function(notaExame) {
        notaExame = parseFloat(notaExame);
        let statusNotaExame = validarNota(notaExame);
        if (!statusNotaExame) {
          console.log('Erro: Nota do exame está fora do intervalo permitido.');
          return false;
        }
        let mediaFinalExame = calcularMediaExame(media, notaExame);
        exibirRelatorio(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, notaExame, media, mediaFinalExame);
        return true;
      });
    } else {
      exibirRelatorio(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notas, 0, media, media);
      return true;
    }
  }
  
  module.exports = {
    validarNota,
    validarNotas,
    calcularMedia,
    processarResultado,
    calcularMediaExame,
    exibirRelatorio,
    processarDados
  };
  