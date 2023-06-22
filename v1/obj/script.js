let nomes = []
let valores = []

inputNome = document.getElementById('inpNome')
inputValor = document.getElementById('inpValor')

function cadastrar(){
    nomes.push(inputNome.value)
    valores.push(inputValor.value)
}

