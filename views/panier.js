

//declaration des variables globales
const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')






//on crée un espace tableau à remplir
let cartStructure = [];

// On essaie de récup le panier depuis le localstorage si il y en a un
let savedCart = JSON.parse(localStorage.getItem("cart"))
//console.log(`savedCart: ${savedCart}`)
console.log(savedCart)


//main()


//function main(){
    //si le panier est vide
    if(savedCart === null){
        console.log("je me sens vide :-( ")
        const domItemEmpty = document.createElement('div')
        domItemEmpty.textContent = "Le panier est vide"
        domItemEmpty.classList.add('empty-cart')
        boxCart.appendChild(domItemEmpty)
    }
    else if (savedCart !== null) {
        //si le panier n'est pas vide
        cartStructure.push(savedCart)
        //console.log(cartStructure)
        //const domItemCart = document.createElement('div')
        //domItemCart.classList.add('box-title')


        //affichage du contenu panier
        const domItemBox = document.createElement('div')
        domItemBox.classList.add('cart-content')

        //affichage de la ligne des titres
        const domItemTitle = document.createElement('div')
        domItemTitle.classList.add('title')
        domItemTitle.innerHTML = '<div> <h2>Nom produit:</h2></div>'

        const domItemTitleB = document.createElement('div')
        domItemTitleB.classList.add('titleB')
        domItemTitleB.innerHTML = '<div> <h2>Option produit:</h2></div>'

        
        const domItemTitleC = document.createElement('div')
        domItemTitleC.classList.add('titleC')
        domItemTitleC.innerHTML = '<div> <h2>Prix produit:</h2></div>'
       

        //domItemCart.appendChild(domItemTitle)

        domItemBox.appendChild(domItemTitle)
        domItemBox.appendChild(domItemTitleB)
        domItemBox.appendChild(domItemTitleC)



            
        boxCart.appendChild(domItemBox)

        for (const itemCart of savedCart.items) {

            const domItemCart = document.createElement('div')
            domItemCart.classList.add('item-content')

            const domItemContent1 = document.createElement('div')
            domItemContent1.classList.add('item-list')
            domItemContent1.textContent = `${itemCart.nom}`

            const domItemContent2 = document.createElement('div')
            domItemContent2.classList.add('option-list')
            domItemContent2.textContent = `${itemCart.option}`

            const domItemContent3 = document.createElement('div')
            domItemContent3.classList.add('prix-list')
            domItemContent3.textContent = `${itemCart.prix}`


            /*
            const domItemCart = document.createElement('div')
            domItemCart1.classList.add('test')
            domItemCart1.textContent = itemCart.nom

            */

            domItemCart.appendChild(domItemContent1)
            domItemCart.appendChild(domItemContent2)
            domItemCart.appendChild(domItemContent3)
            boxCart.appendChild(domItemCart)            
          }

        const domItemTotal = document.createElement('div')
        domItemTotal.classList.add('total-content')

        const domItemTotal1 = document.createElement('div')
        domItemTotal1.classList.add('total-price')
        domItemTotal1.textContent = `total:${savedCart.items.prix}$`

        domItemTotal.appendChild(domItemTotal1)
        boxCart.appendChild(domItemTotal)

    } 

    //else {
        
    
   
      
        
        //}
    

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







