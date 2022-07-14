function Palindromo(string){
    if(!string) return;
    console.log(string === string.split('').reverse().join(''));
}
function verificaPalindromo(string){
    string = string.toLowerCase();
    string = string.normalize('NFD').replace(/[\u0300-\u036f ]/g, "");
    if(!string) return;
    if(!string.length) return;

    for(var i =0; i < string.length/2; i++){
        if(string[i] !== string[string.length -1 -i]){
            return console.log (false);
        }
    }
    return console.log (true);
}
function retiraEspaco(string){
    
    console.log(string.replace(/ /g,""));
}
function retiraAcento(string){
    let nome;    
    nome = string.normalize('NFD').replace(/[\u0300-\u036f ]/g, "");
    console.log(nome);
}
verificaPalindromo('Subí no ônibus');