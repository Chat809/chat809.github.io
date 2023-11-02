let produtosSelecionados = localStorage.getItem("produtosSelecionados");
produtosSelecionados = JSON.parse(produtosSelecionados);
const ul = document.querySelector("ul");

produtosSelecionados.forEach((produto) => {
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.src = `${produto}.png`;
    li.appendChild(img);
    ul.appendChild(li);
});