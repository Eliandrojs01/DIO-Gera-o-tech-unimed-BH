function comparaNumeros(num1, num2){
    const primeiraFrase = criaPrimeiraFrase(num1,num2);
    const segundaFrase = criaSegundaFrase(num1,num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1, num2){
    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = 'não';

    if (num1===num2){
        simNao = '';
    }
    return `${primeiraFrase} ${simNao} são iguais.`;
}
function criaSegundaFrase(num1, num2){
    let soma = num1 + num2;
    
    let compara10 = 'igual a';
    let compara20 = 'igual a';
    if (soma!=10){
        if(soma>10){
            compara10 = 'maior que';
        }
        else compara10 = 'menor que';
               
    }
    if(soma!=20){
        if(soma>20){
            compara20 = 'maior que';
        }
        else compara20 = 'menor que'; 
    }

    return `Sua soma é ${soma}, que é ${compara10} 10 e ${compara20} 20.`
}

console.log(comparaNumeros(10,10));

