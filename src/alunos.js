const alunos = [
    {nome: "Vitor", nota: 8},
    {nome: "Thais", nota: 10},
    {nome: "Danillo", nota: 9},
    {nome: "Claudio", nota: 5},
    {nome: "Andreo", nota: 6},
    {nome: "Franciele", nota: 2},
    {nome: "Rafael", nota: 7}
];

const aprovados = alunos.filter(alunos => alunos.nota >= 6);
aprovados.forEach(alunos => console.log(`${alunos.nome} aprovado, Nota:${alunos.nota}`));

const reprovados = alunos.filter(alunos => alunos.nota < 6);
reprovados.forEach(alunos => console.log(`${alunos.nome} reprovado, Nota:${alunos.nota}. Precisa melhorar`));

console.log(`Todos os aprovados: ${aprovados.length}`);
console.log(`Todos os reprovados: ${reprovados.length}`);

const media = alunos.reduce((acc, aluno) => acc + aluno.nota, 0) / alunos.length;
console.log(`Média da turma: ${media.toFixed(2)}`);