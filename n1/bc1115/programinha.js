let resultado = document.getElementById('divResultado')
function quadrantear(){
    let x = Number(document.getElementById('inpX').value)
    let y = Number(document.getElementById('inpY').value)
    if(x>0 && y>0){
        resultado.innerHTML = 'PRIMEIRO QUADRANTE'
        document.getElementById('q1').innerHTML = '🤐'
    }else{
        if(x<0 && y>0){
            resultado.innerHTML = 'SEGUNDO QUADRANTE'
            document.getElementById('q2').innerHTML = '😎'
        }else{
            if(x<0 && y<0){
                resultado.innerHTML = 'TERCEIRO QUADRANTE'
                document.getElementById('q3').innerHTML = '😁'
            }else{
                if(x>0 && y<0){
                    resultado.innerHTML = 'QUARTO QUADRANTE'
                    document.getElementById('q4').innerHTML = '🤗'
                }else{
                    resultado.innerHTML = 'ERR0 #19534'
                }
            }
        }
    }
}