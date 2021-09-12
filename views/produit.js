
const cardTeddy = document.getElementById("card-teddy")



function getOneProduct(){
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



function showOneProduct(product){
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



        
           
           
    
    