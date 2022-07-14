function calculacadora(){
    const operacao = Number(prompt('Escolha uma operação!\n1 - Adição(+)\n2 - Subtração(-)\n3 - Multiplicação(*)\n4 - Divisão(/)\n5 - Resto da divisão(%)'));
    if (!operacao||operacao>=6){
        alert('Erro! Operação inválida');
        calculacadora();
    }else{
        let n1 = Number(prompt('Digite o primeiro valor'));
        let n2 = Number(prompt('Digite o segundo valor'));
        let resultado = 0;
        if(!n1 || !n2){
            alert('Valores inválidos!');
            calculacadora();
        }else{
            function soma(){
                resultado = n1+n2;
                alert (`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1-n2;
                alert (`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao(){
                resultado = n1*n2;
                alert (`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisao(){
                resultado = n1/n2;
                alert (`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            }
            function restodivisao(){
                resultado = n1%n2;
                alert (`O resto da divisão entre ${n1} e ${n2} é: ${resultado}`);
                novaOperacao();
            }
            function novaOperacao(){
                let opcao = Number(prompt('Deseja realizar uma nova operação?\n1 - Sim\n2 - Não'));
                if(!opcao || opcao>=3){
                    alert('Opção Invalida!');
                    novaOperacao();
                }else{
                    if (opcao == 1){
                        calculacadora();
                    }else{
                        alert('Até mais!');
                    }
                }            
            }
        }
        
        if(operacao == 1){           
            soma();
        }
        if(operacao == 2){
            subtracao();
        }
        if(operacao == 3){
            multiplicacao();
        }
        if(operacao ==4){
            divisao();
        }
        if(operacao==5){
            restodivisao();
        }
    }
}

calculacadora();