

//declaration des variables globales
const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')






//on crée un espace tableau à remplir
let cartStructure = [];

// On essaie de récup le panier depuis le localstorage si il y en a un
let savedCart = JSON.parse(localStorage.getItem("cart"))
console.log(`savedCart: ${savedCart}`)


//main()


//function main(){
    //si le panier est vide
    if(savedCart === null){
        console.log("je me sens vide :-( ")
        const domItemEmpty = document.createElement('div')
        domItemEmpty.textContent = "Le panier est vide"
        domItemEmpty.classList.add('empty-cart')
        
        //boxCart.innerHTML = domItemEmpty
        boxCart.appendChild(domItemEmpty)
        //boxCart.appendChild(domItemEmpty)
    }
    else{
        const domItemCart = document.createElement('div')
        domItemCart.classList.add('test')

        /*for( k = 0; k < savedCart.length; k++)
        }
        */
        for(let element of cartStructure){
            console.log("i m finally there !!!")
            console.log(element)
        }
        domItemCart.textContent = cartStructure


        boxCart.appendChild(domItemCart)
        
        //}
    }

//}







/*
//Appel à la fonction principale

main()


//Déclaration de la fonction principale

function main(){


    //verifier si notre clé existe ou pas dans le local storage
    if (!localStorage.getItem("cart")){
        createStorage()
        recupStorage()
        }else {
            recupStorage()
        }




    function createStorage(teddy){
        localStorage.setItem(
            { 
            cart: [
              { 
                "id": `${teddy.id}`,
                "name": `${teddy.name}`,
                "price":`${teddy.price}`,
                "colors": `${teddy.colors}`,
              } 
            ] 
          }
        )
         
    }
    
        console.log("crée")
    
    //} 
    
    //recuperer les données sauvegardées
    function recupStorage(teddy){
        //appelle a l'api
        fetch(`http://localhost:2025/api/teddies/${teddy}`)
        //Gestion de la promesse envoyé par l'api
        .then((resp) => resp.json())
        .then((data) => {
            //Affichage des éléments du Dom
            console.log(data)

            
                //localStorage.getItem((JSON.parse("produit"))
                localStorage.getItem(("cart"))
                console.log("recuperé")
            
                //mise en page avec les données recuperées
                
                //for (const produit of produits) {
                //    console.log(produit)
                
                    const elementPanier = document.createElement('div')
                    elementPanier.classList.add('cart-item')
            
                    const domItemImg = document.createElement('img')
                    domItemImg.setAttribute('src', 'teddy.imageUrl')
            
                    boxCart.appendChild(elementPanier)
                    elementPanier.appendChild(domItemImg)
                //}
        })
        
    }
}
*/







