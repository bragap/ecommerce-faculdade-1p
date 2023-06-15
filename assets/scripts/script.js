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
      <a href="https://pedrohbragac.github.io/ecomerce/id=${produto.id}" class=" btn btn-secondary rounded mx-auto d-block text-dark" ">Details</a>
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
      <a href="http://127.0.0.1:5501/detalhes.html?id=${produto.id}" class=" btn btn-secondary rounded mx-auto d-block text-dark" ">Details</a>
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
      <a type="button" class="btn btn-secondary rounded mx-auto d-block text-dark" href="http://127.0.0.1:5501/detalhes.html?id=${produto.id}">Details</a>
    </div>
  </div>`
  resultadosContainer.innerHTML += textoExib;
            });  
        }


// Função associada ao input de pesquisar
/*function filtrarCardsPorPesquisa(cards) {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value.toLowerCase().trim();

  if (searchText !== "") {
    return cards.filter((card) =>
      card.title.toLowerCase().includes(searchText)
    );
  } else {
    return cards;
  }
}

function buscarEExibirCards(tela, ...categories) {
  const tela2 = document.getElementById('tela');
  tela2.innerHTML = "";

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      let filteredCards = filtrarCardsPorPesquisa(json);

      if (categories.length > 0 && !categories.includes("All")) {
        filteredCards = filteredCards.filter((card) =>
          categories.includes(card.category)
        );
      }
      for (let i = 0; i < filteredCards.length; i++) {
        const card = filteredCards[i];
        let textoExib = '';
        textoExib = `
        <div class="card">
        <div class="card-body">
          <img src="${card.image}" class="card-img rounded mx-auto d-block" alt="...">
          <h5 class="card-title text-center">${card.title}</h5>
          <p class="card-text text-center"> Category: ${card.category}</p>
          <p class="card-text text-center"> Price: ${card.price}</p>
          <a type="button" class="btn btn-secondary rounded mx-auto d-block" href="http://127.0.0.1:5501/detalhes.html?id=${card.id}">Details</a>
        </div>
      </div>`;
      tela2.innerHTML = textoExib;;
      }
    });
}*/


    
      


       





//FUNÇÕES ERRADAS

/*function gotoLink(button) {
    const url = button.value;
    fetch(url)
        .then(res => res.json())
        .then(produto => {
            let tela = document.getElementById('tela')
            let textoExib = `
            <div class="card">
            <h3 class="text-center"> Details of the Product </h3>
          <div class="card-body ">
            <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
            <h5 class="card-title text-center">${produto.title}</h5>
            <p class="card-text text-center">Category: ${produto.category}</p>
            <p class="card-text text-center">${produto.description}</p> 
            <p class="card-text text-center">Price: ${produto.price}</p>
            <p class="card-text text-center">Rating: ${produto.rating.rate}</p> 
          </div>
        </div>
      `;
            
            tela.innerHTML = textoExib;
});
    
}*/

/*const btnDetalhes = document.getElementById("bt-details");
btnDetalhes.addEventListener("click",function(){
    window.location.href = "http://127.0.0.1:5501/detalhes.html?funcao=" + encodeURIComponent(gotoLink);
});*/


/*const btnPesquisa = document.getElementById("bt1");
btnPesquisa.addEventListener("click", function () {
    let valorPesquisa = document.getElementById("inputSearch").value;
    fetch(`https://fakestoreapi.com/products/search?${valorPesquisa}=nnn`)
    .then(res => res.json())
    .then(produto => {
        let tela = document.getElementById('tela')
        let textoExib = `
        <div class="card">
      <div class="card-body">
      <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
      <h5 class="card-title text-center">${produto.title}</h5>
      <p class="card-text text-center"> Category: ${produto.category}</p>
      <p class="card-text text-center"> Price: ${produto.price}</p>
      </div>
    </div>`;
        
        tela.innerHTML = textoExib;
});
})*/