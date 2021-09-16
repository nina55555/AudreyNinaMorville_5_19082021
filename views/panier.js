const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')


//gestion du local storage pour recuperer l'id posé dans le panier

//creation du addEventListener
ajout.addEventListener ("click", e =>{
    e.preventDefault()

//verifier si notre clé existe ou pas dans le local storage
if (!localStorage.getItem("produit")){
    createStorage()
    }else {
        recupStorage()
    }

//pour sauvegarder les données dans le local storage
createStorage =>{
//convertir l'objet javascript en objet json
    const newStorage = localStorage.setItem(/*clé*/"produit", /*objet*/ JSON.stringify("teddyId"))
    console.log(newStorage)
} 

//pour recuperer les données sauvegardées
recupStorage => {
    //const getStorage = localStorage.getItem("produit")
    const getStorage = localStorage.getItem(JSON.parse("produit"))
    console.log(getStorage)
}

//json.parse c'est pour convertir les donnees au format json qui sont dans le local storage en objet javascript

//convertir le json en object javascript pour le lire

//fin du addEventListener
})
