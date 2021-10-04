
//declaration des variables globales
const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')

//on crée un espace tableau à remplir
let cartStructure = [];

// On essaie de récup le panier depuis le localstorage si il y en a un
let savedCart = JSON.parse(localStorage.getItem("cart"))
console.log(savedCart)

main()

function main(){
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

        //affichage de la box des titres
        const domItemBox = document.createElement('div')
        domItemBox.classList.add('cart-content')

        //affichage du contenu des titres
        const domItemTitle = document.createElement('div')
        domItemTitle.classList.add('title')
        domItemTitle.innerHTML = '<div> <h2>Nom produit:</h2></div>'

        const domItemTitleB = document.createElement('div')
        domItemTitleB.classList.add('titleB')
        domItemTitleB.innerHTML = '<div> <h2>Option produit:</h2></div>'
        
        const domItemTitleC = document.createElement('div')
        domItemTitleC.classList.add('titleC')
        domItemTitleC.innerHTML = '<div> <h2>Prix produit:</h2></div>'
       
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
            
            domItemCart.appendChild(domItemContent1)
            domItemCart.appendChild(domItemContent2)
            domItemCart.appendChild(domItemContent3)
            boxCart.appendChild(domItemCart)            
          }
    } 
    const allPrices = []

    console.log(savedCart.totalPrice)

        const domItemTotal = document.createElement('div')
        domItemTotal.classList.add('total-content')

        const domItemTotal1 = document.createElement('div')
        domItemTotal1.classList.add('total-price')
        domItemTotal1.textContent = `total:${savedCart.totalPrice}$`

        domItemTotal.appendChild(domItemTotal1)
        boxCart.appendChild(domItemTotal)

    //on crée un evenement au click qui récupère les données du panier 
    document.getElementById("button").addEventListener ("click", () =>{
        console.log("helloooo")


        //declaration d'une fonction pour recuperer les données du formulaire
        send()

        function send (){

            //on crée l'objet
            const form = {
                firstName:document.querySelector("#firstName").value,
                lastName:document.querySelector("#lastName").value,
                adress:document.querySelector("#adress").value,
                city:document.querySelector("#city").value,
                email:document.querySelector("#email").value
            }
            console.log("form")
            console.log(form)



            //mettre l'objet "recupValues" da,s le local storage
            let recupForm= localStorage.setItem("form",JSON.stringify(form) )


            
            // On récup le panier depuis le localstorage 
            let savedForm = JSON.parse(localStorage.getItem("form"))


        //window.location = `confirmation.html`

        } 
    })  
    
}     

           



