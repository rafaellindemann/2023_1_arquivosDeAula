
let maior = 0, posicao


for(i=0; i<100;i++){
    let n = Math.round(Math.random()*50000)
    console.log(i + ": " + n);
    if(n > maior){
        maior = n
        posicao = i
    }
}

document.getElementById('divResultado').innerHTML = 
"Maior valor: " + maior + "<BR>Posição: " + posicao

// alert(maior + " " + posicao)
