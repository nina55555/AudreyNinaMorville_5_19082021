

//declaration des variables globales
const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')




//creation du addEventListener
//ajout.addEventListener("click", () =>{
    //e.preventDefault()
    //addCart(){   
    //}


//gestion du local storage pour recuperer l'id posé dans le panier

//verifier si notre clé existe ou pas dans le local storage
if (!localStorage.getItem("produit")){
    createStorage()
    recupStorage()
    }else {
        recupStorage()
    }

//sauvegarder les données dans le local storage
//function createStorage(){
//convertir l'objet javascript en objet json
    //localStorage.setItem(/*clé*/"produit",
    ///*objet*/ JSON.stringify(`${teddyId}`))



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
function recupStorage(){
//lire l'objet json en clair
    //localStorage.getItem((JSON.parse("produit"))
    localStorage.getItem(("produit"))
    console.log("recuperé")

    //mise en page avec les données recuperées
      
    /*for (const produit of produits) {
        console.log(produit)
    */
        const elementPanier = document.createElement('div')
        elementPanier.classList.add('cart-item')

        const img = document.createElement('img')
        img.setAttribute('src', `${teddy.imageUrl}`)

        boxCart.appendChild(elementPanier)
        elementPanier.appendChild(img)
}
    

//json.parse c'est pour convertir les donnees au format json qui sont dans le local storage en objet javascript

//convertir le json en object javascript pour le lire

//fin du addEventListener
//})
