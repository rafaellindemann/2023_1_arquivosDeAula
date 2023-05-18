let resultado = document.getElementById('divResultado')

function acharQuadrante(){
    let x = Number(document.getElementById('inpX').value)
    let y = Number(document.getElementById('inpY').value)

    if(x>0 && y>0){
        resultado.innerHTML = "Está no primeiro quadrante"
    }else{
        if(x<0 && y>0){
            resultado.innerHTML = "Está no segundo quadrante"
        }else{
            if(x<0 && y<0){
                resultado.innerHTML = "Está no terceiro quadrante"
            }else{
                if(x>0 && y<0){
                    resultado.innerHTML = "Está no quarto quadrante"
                }else{
                    resultado.innerHTML = "Valores  inválidos. Corrige aí, ó pá"
                }
            }
        }
    }
}



