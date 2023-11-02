let botaoCarrinho = document.querySelectorAll(".botao-carrinho");
let botaoFecharPedido = document.getElementById("fecharPedido");
let listaProdutos = [];

botaoCarrinho.forEach((botao) => {
    botao.addEventListener("click", () =>{
        let idProduto = botao.getAttribute("id");
        adicionarProduto(idProduto);
    });
});

function adicionarProduto(idProduto){
    if(!listaProdutos.includes(idProduto)){
        listaProdutos.push(idProduto)
    } else {
        listaProdutos.splice(listaProdutos.indexOf(idProduto), 1)
    }
};

botaoFecharPedido.addEventListener("click", () => {
    if(listaProdutos.length === 0){
        alert("Selecione o produto antes de fechar o pedido")
    } else {
        localStorage.setItem("produtosSelecionados", JSON.stringify(listaProdutos));
        console.log(listaProdutos);
        window.location.href = "pedidos.html";
    }
});