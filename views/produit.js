

/*
function main() {

    //trouver une fonction pour afficher ma liste d'article 
    console.log("je suis heureuse");

    fetch('http://localhost:3000/api/teddies')
    .then((resp) => console.log(resp.json()));

}

main();
*/



/*
const a = document.querySelector("a")
a.addEventListener(click =>{
    
    fetch('http://localhost:3000/api/teddies')
        .then(resp =>
        resp.json()
        )
        .then(data => { 
             liste += `<img src="${teddy.imageUrl}"width=100%>`
            liste += `<p> ${teddy.name}</p> `
            liste += `<p> ${teddy.price}</p> `
            liste += `</a>`
        }
        
        )
        .catch((e)=> console.log(e))
        const shop = document.querySelector("#shop")
        shop.innerHTML = liste
        
}
    )
    
*/




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



        
           
           
    
    