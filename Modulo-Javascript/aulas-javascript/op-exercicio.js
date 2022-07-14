function verificaPar(num1){
    const frase = criafrase (num1);

    return `O numero ${num1} ${frase}`;
}
function criafrase(num1){
    let resultado = num1%2;
    let verifica = 'É par';
    if(resultado!=0){
        verifica = 'É impar';
        
    }
    return verifica;
}
console.log(verificaPar(89));
