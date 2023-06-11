let params = new URLSearchParams(location.search);
let id = params.get('id');

if( id <= 20 ){
fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
        .then(produto => {
            let tela = document.getElementById('tela')
            let textoExib = `
            <div class="card border border-dark">
            <h3 class="text-center  bg-dark-subtle rounded"> Details of the Product </h3>
          <div class="card-body ">
            <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
            <h5 class="card-title text-center bg-dark-subtle rounded">${produto.title}</h5>
            <p class="card-text text-center  bg-body-secondary rounded">Category: ${produto.category}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Description: ${produto.description}</p> 
            <p class="card-text text-center  bg-body-secondary rounded">Price: ${produto.price}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Rating: ${produto.rating.rate}</p> 
          </div>
        </div>
      `;
            
            tela.innerHTML = textoExib;
});

} else {
  fetch(`http://diwserver.vps.webdock.cloud:8765/products/${id}`)
        .then(res => res.json())
        .then(produto => {
            let tela = document.getElementById('tela')
            let textoExib = `
            <div class="card border border-dark">
            <h3 class="text-center"> Details of the Product </h3>
          <div class="card-body ">
            <img src="${produto.image}" class="card-img rounded mx-auto d-block" alt="...">
            <h5 class="card-title text-center bg-dark-subtle rounded">${produto.title}</h5>
            <p class="card-text text-center  bg-body-secondary rounded">Category: ${produto.category}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Description: ${produto.description}</p> 
            <p class="card-text text-center  bg-body-secondary rounded">Price: ${produto.price}</p>
            <p class="card-text text-center  bg-body-secondary rounded">Rating: ${produto.rating.rate}</p> 
          </div>
        </div>
      `;
            
            tela.innerHTML = textoExib;
});
}