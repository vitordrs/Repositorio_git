"use strict";

var alunos = [{
  nome: "Vitor",
  nota: 8
}, {
  nome: "Thais",
  nota: 10
}, {
  nome: "Danillo",
  nota: 9
}, {
  nome: "Claudio",
  nota: 5
}, {
  nome: "Andreo",
  nota: 6
}, {
  nome: "Franciele",
  nota: 2
}, {
  nome: "Rafael",
  nota: 7
}];
var aprovados = alunos.filter(function (alunos) {
  return alunos.nota >= 6;
});
aprovados.forEach(function (alunos) {
  return console.log("".concat(alunos.nome, " aprovado, Nota:").concat(alunos.nota));
});
var reprovados = alunos.filter(function (alunos) {
  return alunos.nota < 6;
});
reprovados.forEach(function (alunos) {
  return console.log("".concat(alunos.nome, " reprovado, Nota:").concat(alunos.nota, ". Precisa melhorar"));
});
console.log("Todos os aprovados: ".concat(aprovados.length));
console.log("Todos os reprovados: ".concat(reprovados.length));
var media = alunos.reduce(function (acc, aluno) {
  return acc + aluno.nota;
}, 0) / alunos.length;
console.log("M\xE9dia da turma: ".concat(media.toFixed(2)));