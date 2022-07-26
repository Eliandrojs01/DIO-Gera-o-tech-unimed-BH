/*
// resposta desafio 1
const employee = {
    code : 10,
    name : 'Eliandro',

};

const employee2 : {code: Number, name: String} = {
    code: 1,
    name: 'Eliandro',
};


interface employee3{
    code: Number,
    name: String
}

const employeeObj = {} as employee3;
employeeObj.code = 11;
employeeObj.name ='Eliandro';


//DESAFIO 2
const pessoa1 : {nome: String, idade: Number, profissao:String} ={
    nome : "maria",
    idade : 29,
    profissao : "atriz",
}


const pessoa2 = {
    nome :"roberto",
    idade : 19,
    profissao : "Padeiro",
}


interface  pessoa3 {
    nome: "laura",
    idade: 32,
    profissao: "Atriz"
};

interface pessoa4 {
    nome : String,
    idade : Number,
    profissao : string
}

const pessoaObj = {} as pessoa4;
pessoaObj.nome = "ELIANDRO";
pessoaObj.idade = 31;
pessoaObj.profissao = "Desenvolvedor";
*/

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0

limparSaldo()

function somarAoSaldo(soma: number) {
    if(campoSaldo){
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        limparCampoSoma();
    }    
}

function limparCampoSoma() {
    soma.value = "";
}

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    }
    
}

if (botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number (soma.value));
    });
}
botaoLimpar.addEventListener('click', () =>{
    limparSaldo();
});


