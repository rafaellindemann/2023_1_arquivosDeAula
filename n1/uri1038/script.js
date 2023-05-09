function comprar(){
    let codigo = Number(prompt("Digite o código:"))
    let quantidade = Number(prompt("Quantidade: "))
    if(codigo == 1){
        preco = 4
    }else{
        if(codigo == 2){
            preco = 4.5
        }else{
            if(codigo == 3){
                preco = 4.99
            }
        }
    }
    let total = preco * quantidade
    alert("Valor a pagar: R$" + total.toFixed(2))
}
