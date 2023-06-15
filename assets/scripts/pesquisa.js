let params = new URLSearchParams(window.location.search);
let searchParams = params.get('query');

if(searchParams == ""){
    alert("Insira um produto válido");
}else {

fetch(`https://diwserver.vps.webdock.cloud:8765/products/search?query=${searchParams}`)
        .then(res => res.json())
        .then(products => {
            let tela = document.getElementById('tela')
            for(let product of products ){
            tela.innerHTML += `
            <div class="card border border-dark">
          <div class="card-body ">
            <img src="${product.image}" class="card-img rounded mx-auto d-block" alt="...">
            <h5 class="card-title text-center bg-dark-subtle rounded">${product.title}</h5>
            <p class="card-text text-center  bg-body-secondary rounded">Category: ${product.category}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Price: ${product.price}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Rating: ${product.rating.rate}</p> 
            <a type="button" class="btn btn-secondary rounded mx-auto d-block text-dark" href="https://pedrohbragac.github.io/ecomerce/detalhes.html?id=${product.id}">Details</a>

          </div>
        </div>
      `;
            }
});
}
