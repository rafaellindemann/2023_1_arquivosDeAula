document.onkeyup = function (evento){
    let tecla = Number(evento.key)
    document.getElementById('divNumero').innerHTML = tecla
    // document.getElementById('inpNumero').value = tecla
    // console.log(!isNaN(tecla))
    if(!isNaN(tecla))
    {
        // aqui eu sei que é uma resposta e posso corrigir
    }
    // trampo pra fazer com aquele valor da tecla
}
