

/*
function main() {

    //trouver une fonction pour afficher ma liste d'article 
    console.log("je suis heureuse");

    fetch('http://localhost:3000/api/teddies')
    .then((resp) => console.log(resp.json()));

}

main();
*/

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
    


        
           
           
    
    