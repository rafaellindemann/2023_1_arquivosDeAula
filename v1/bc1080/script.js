let resultado = document.getElementById('divResultado')

function gerar(){
    let n, maior, posicaoMaior    
    maior = -1

    for(i=0; i<100;i++){
        n = Math.ceil(Math.random()*100000)
        console.log(i + ": " + n);
        if(n>maior){
            maior = n
            posicaoMaior = i
        }
    }
    resultado.innerHTML = "Maio valor: " + maior + 
    "<BR>Posição: " + posicaoMaior
}