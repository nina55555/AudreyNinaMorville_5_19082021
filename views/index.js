
/*fetch('http://localhost:3000/api/teddies')
    .then((resp) => 
        console.log(resp.json())
    )
*/




/*
const imageText = document.getElementById("image-text")
const shop = document.getElementById("shop")


fetch('http://localhost:3000/api/teddies')
    .then(resp =>
        resp.json()
    )
    .then(data => {
        console.log(data);
        let liste = `<ul>`;
            for (let teddy of data){
            liste += `<img src="${teddy.imageUrl}">`;
            liste += `<li>${teddy.name}</li>`;
            liste +=  `<li>${teddy.price}</li>`;

            }
        liste += `</ul>`;
        document.getElementById("shop").innerHTML = liste;  
        }
    ) 
    .catch((e) => console.log(e))

    */





    const imageText = document.getElementById("image-text")
const shop = document.getElementById("shop")


fetch('http://localhost:3000/api/teddies')
    .then(resp =>
        resp.json()
    )
    .then(data => {
        console.log(data);
        let liste = `<a href="produit.js">`;
            for (let teddy of data){
            liste += `<div>${teddy.name}</div>`;
            liste +=  `<div>${teddy.price}</div>`;
            liste += `<img src="${teddy.imageUrl}"width=20% >`;
            

            }
        liste += `</a>`;
        document.getElementById("shop").innerHTML = liste;  
        }
    ) 
    .catch((e) => console.log(e))