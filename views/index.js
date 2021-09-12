
const box = document.getElementById("teddy")
const cardTeddy = document.getElementById("card-teddy")



function getProducts(){
    console.log("function get products");
    fetch('http://localhost:3000/api/teddies')
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showProducts(data);
    }      
    )
    .catch((e)=> console.log(e));
}

function showProducts(products){
    for (let teddy of products){
        box.innerHTML += 
        `<a href="produit.html" class ="card">
            <div class ="card-img">
                <img src =${teddy.imageUrl} alt="teddy's picture" />
            </div>
            <div class ="card-infos">
                <p class ="info-name">${teddy.name}</p>
                <p class ="info-price">${teddy.price}$</p>
            </div>
        </a>`;
    }
}
getProducts();



function getOneProduct(teddy){
    console.log("function get one product");
    fetch('http://localhost:3000/api/teddies/:_$id')
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showOneProduct(data);
    }      
    )
    .catch((e)=> console.log(e));
}




function showOneProduct(data){
    cardTeddy.innerHTML +=
    `<div class ="card">
        <div class ="card-img">
            <img src =${teddy.imageUrl} alt="teddy's picture" />
        </div>
        <div class ="card-infos">
            <p class ="info-name">${teddy.name}</p>
            <p class ="info-price">${teddy.price}$</p>
        </div>
    </div>`;
}


document.box.addEventListener("click", e =>{
    e.preventDefault();
    showOneProduct(teddy);
} 
)
