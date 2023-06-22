let pessoas = [] 

function cadastrar(){
    let pessoa = {
        nome: document.getElementById('inpNome').value,
        idade: Number(document.getElementById('inpIdade').value)
    }
    pessoas.push(pessoa)
}
