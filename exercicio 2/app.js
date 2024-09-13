// app.js
const universitySystem = require('./universitySystem');
const readline = require('readline');

const entradaDeDados = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

entradaDeDados.question('Digite o nome do aluno: ', function(nomeAluno) {
  entradaDeDados.question('Digite o nome do professor: ', function(nomeProfessor) {
    entradaDeDados.question('Digite o sexo do aluno (masculino/feminino): ', function(sexoAluno) {
      entradaDeDados.question('Digite o sexo do professor (masculino/feminino): ', function(sexoProfessor) {
        entradaDeDados.question('Digite o nome do curso: ', function(nomeCurso) {
          entradaDeDados.question('Digite o nome da disciplina: ', function(nomeDisciplina) {
            entradaDeDados.question('Digite as 4 notas do aluno (separadas por espaço): ', function(notas) {
              let notasArray = notas.split(' ').map(Number);
              universitySystem.processarDados(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notasArray, function() {
                entradaDeDados.question('Digite a nota do exame (0-100): ', function(notaExame) {
                  // Process the exam note and generate the final report
                  let averageWithExam = (notasArray.reduce((a, b) => a + b, 0) + notaExame) / 5;
                  let status = universitySystem.getStatus(averageWithExam);
                  universitySystem.generateReport(nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, notasArray, averageWithExam, status);
                });
              });
            });
          });
        });
      });
    });
  });
});