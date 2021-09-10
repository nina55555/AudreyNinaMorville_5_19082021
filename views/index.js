
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




/*
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
            liste +=  `<div>${teddy.price.add}</div>`;
            liste += `<img src="${teddy.imageUrl}"width=20%>`;
            }
        liste += `</a>`;
        document.getElementById("shop").innerHTML = liste; 
        document.body.style.color = "white";
        }
    ) 
    .catch((e) => console.log(e))

    */


    
  









/*

fetch('http://localhost:3000/api/teddies')
    .then(resp =>
        resp.json()
    )
    .then(data => {        
        let liste = `<a href="../produit.html">`;

            for (let teddy of data){
            liste += `<img src="${teddy.imageUrl}"width=100%>`;
            liste += `<p> ${teddy.name}</p> `;
            liste += `<p> ${teddy.price}</p> `; 

            liste += `</a>`;
            }  
        const shop = document.querySelector("#shop")
        shop.innerHTML = liste
        }  
    ) 
    .catch((e)=> console.log(e))
*/


//--------
//fonction
//--------


const url = ('http://localhost:3000/api/teddies')
//mettre l'api des teddies dans la constante url
const bigBox = document.getElementById("shop")
//faire la boucle a l'interieur de la bigBox
const smallCard = document.getElementById("teddy")
//ajouter les images dans ces divs puis injecter les noms d'api puis append les smallCards dans la bigBox

const nomination = document.getElementById("nomination")
const price = document.getElementById("price")

fetch(url)
    .then(resp =>
        resp.json()
    )
    .then(data => {        

            for (let teddy of data){ 
                smallCard.classList.add("pic-style")
                smallCard.classList.add(".card")
                smallCard.innerHTML = `<img src = "${teddy.imageUrl}">`;
                price.innerHTML = teddy.price
                nomination.innerHTML = teddy.name
            }  
            
            smallCard.append(nomination)
            smallCard.append(price)
            bigBox.append(smallCard) 
    }  
        
    ) 
    .catch((e)=> console.log(e)) 