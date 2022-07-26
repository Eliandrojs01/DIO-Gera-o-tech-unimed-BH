/*const alunos = [
    {nome: 'JOÃO',  nota: 6},
    {nome: 'MARIA',  nota: 4},
    {nome: 'ANA',  nota: 8},
    {nome: 'PEDRO',  nota: 5},
];

function alunosAprovados(alunos, media){
    let aprovados = [];
    for (let i = 0; i < alunos.length; i ++){
        const {nome,nota} = alunos[i];//object destructuring
        if(nota>=media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));*/

const pessoa1 = {nome: 'Lucas', idade: 25,};
const pessoa2 = {nome: 'ANA', idade: 15,};
const animal = {nome: 'Laika', idade: 5, raca: 'SRD',};

function calculaIdade(anos){
return `Daqui a ${anos} ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

console.log(calculaIdade.call(animal,3));