//Função para exibir os cards qnd carregar a pagina inicialmente
window.addEventListener("load",function(){
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(produtos => {
        let tela = document.getElementById('tela')
        let textoExib = ""
        for (let i = 0; i < produtos.length; i++) {
            let produto = produtos[i];
            textoExib += `<div class="card border border-dark">
    <div class="card-body ">
      <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
      <h5 class="card-title text-center bg-dark-subtle rounded">${produto.title}</h5>
      <p class="card-text text-center bg-body-secondary rounded">Category: ${produto.category}</p>
      <p class="card-text text-center bg-body-secondary rounded">Price: ${produto.price}</p>
      <a href="https://pedrohbragac.github.io/ecomerce/detalhes.html?id=${produto.id}" class=" btn btn-secondary rounded mx-auto d-block text-dark" ">Details</a>
    </div>
  </div>`
        }
        tela.innerHTML = textoExib;
})

    })

// Buscar categorias ao clicar 
const tab2Button = document.getElementById("tab2-tab")
tab2Button.addEventListener("click", function () {
    buscarEExibirProdutos("https://fakestoreapi.com/products/category/jewelery");
})
const tab3Button = document.getElementById("tab3-tab")
tab3Button.addEventListener("click", function () {
    buscarEExibirProdutos("https://fakestoreapi.com/products/category/men's clothing");
})
const tab4Button = document.getElementById("tab4-tab")
tab4Button.addEventListener("click", function () {
    buscarEExibirProdutos("https://fakestoreapi.com/products/category/women's clothing");
})
const tab5Button = document.getElementById("tab5-tab")
tab5Button.addEventListener("click", function () {
    buscarEExibirProdutos("https://fakestoreapi.com/products/category/electronics");
})
const tab1Button = document.getElementById("tab1-tab")
tab1Button.addEventListener("click", function () {
    buscarEExibirProdutos("https://fakestoreapi.com/products");
})

// Função para buscar cada categoria
function buscarEExibirProdutos(par) {
    fetch(`${par}`)
        .then(res => res.json())
        .then(produtos => {
            let tela = document.getElementById('tela')
            let textoExib = ""
            for (let i = 0; i < produtos.length; i++) {
                let produto = produtos[i];
                textoExib += `<div class="card border border-dark">
    <div class="card-body ">
      <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
      <h5 class="card-title text-center bg-dark-subtle rounded">${produto.title}</h5>
      <p class="card-text text-center bg-body-secondary rounded">Category: ${produto.category}</p>
      <p class="card-text text-center bg-body-secondary rounded">Price: ${produto.price}</p>
      <a href="https://pedrohbragac.github.io/ecomerce/detalhes.html?id=${produto.id}" class=" btn btn-secondary rounded mx-auto d-block text-dark" ">Details</a>
    </div>
  </div>`
            }
            tela.innerHTML = textoExib;
        })
}


const btnPesquisar = document.getElementById("bt1");
btnPesquisar.addEventListener("click",function(){
const searchInput = document.getElementById("search-input");
const searchText = searchInput.value.toLowerCase().trim();

if (searchText !== "") {
    fetch(`https://fakestoreapi.com/products?title=${searchText}`)
      .then((res) => res.json())
      .then((json) => exibirResultadosPesquisa(json));
  }
})



// Função para exibir os resultados da pesquisa na página
function exibirResultadosPesquisa(produtos) {
  const resultadosContainer = document.getElementById("tela");
  resultadosContainer.innerHTML = "";

  if (produtos.length === 0) {
    resultadosContainer.innerHTML = "Nenhum produto encontrado.";
    return;
  }

  produtos.forEach((produto) => {
    let textoExib = ""
    textoExib += `<div class="card border border-dark">
    <div class="card-body ">
      <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
      <h5 class="card-title text-center bg-dark-subtle rounded">${produto.title}</h5>
      <p class="card-text text-center bg-body-secondary rounded">Category: ${produto.category}</p>
      <p class="card-text text-center bg-body-secondary rounded">Price: ${produto.price}</p>
      <a type="button" class="btn btn-secondary rounded mx-auto d-block text-dark" href="https://pedrohbragac.github.io/ecomerce/detalhes.html?id=${produto.id}">Details</a>
    </div>
  </div>`
  resultadosContainer.innerHTML += textoExib;
            });  
        }
