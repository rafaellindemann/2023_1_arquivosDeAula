let resultado = document.getElementById('divResultado')

function gerarSequencia(){
    let numero = Number(document.getElementById('inpNumero').value)

    if(numero % 2 == 0){
        numero++
    }

    resultado.innerHTML = ' | '
    let cont = 0
    while(cont < 6){
        resultado.innerHTML += numero + " | "
        cont++
        numero += 2
    }

}