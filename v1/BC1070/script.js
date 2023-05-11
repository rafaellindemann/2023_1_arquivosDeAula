
let resultado = document.getElementById('divResultado')
let numero = document.getElementById('inpNumero')
function gerarSequencia(){
    document.getElementById('divResultado').innerHTML = ''
    let n = Number(numero.value)
    if(n%2 == 0){
        n = n + 1
    }
    let contImpares
    contImpares = 0
    while(contImpares<6){
        resultado.innerHTML += n + '<br>'
        contImpares = contImpares + 1
        n = n + 2
    }
}