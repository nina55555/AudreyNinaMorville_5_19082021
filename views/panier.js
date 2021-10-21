
//declaration des variables globales
const boxCart = document.getElementById('box-cart')

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

        const domItemTotal = document.createElement('div')
        domItemTotal.classList.add('total-content')

        const domItemTotal1 = document.createElement('div')
        domItemTotal1.classList.add('total-price')

        if(savedCart !== null){
            domItemTotal1.textContent = `total:${savedCart.totalPrice}$`
        }
        else if (savedCart === null){
            domItemTotal1.textContent = "total:0 $" 
        }

        domItemTotal.appendChild(domItemTotal1)
        boxCart.appendChild(domItemTotal)

        //on crée un evenement au click qui récupère les données du panier 
        document.getElementById("button").addEventListener ("click", (e) =>{
            e.preventDefault()
            //declaration d'une fonction pour recuperer les données du formulaire
            send()
        })

            function send (){
                //on verifie que les entrées user existent et sont au format adapté
                const inputFirstName = document.querySelector("#firstName")
                /*let firstName = ''
                if (inputFirstName) {
                    //firstName = typeof inputFirstName.value === 'string' ? inputFirstName.value : firstName
                }
                */
                let firstName = inputFirstName.value.trim();
                if(firstName === ''){
                    err()
                    return false
                }

                const inputLastName = document.querySelector("#lastName")
                let lastName = inputLastName.value.trim();
                if(lastName === ''){
                    err()
                    return false
                }

                const inputAddress = document.querySelector("#address")
                let address = inputAddress.value.trim();
                if(address === ''){
                    err()
                    return false
                }
               
                const inputCity = document.querySelector("#city")
                let city = inputCity.value.trim();
                if(city === ''){
                    err()
                    return false
                }

                const inputEmail = document.querySelector("#email")
                let email = inputEmail.value.trim();
                if(email === ''){
                    err()
                    return false
                }
                else if(!isEmail(email)){
                    alert("regardez bien ceci n'est pas un email valide")
                    return false
                }
                //on fait une fonction avec des regex pour verifier le format de l'email
                function isEmail(email){
                    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
                }
                 function err(){
                     alert("je vous ordonne de remplir ce champs ! Non je plaisante vous faites comme vous voulez `:-)")
                 }
            
                //on crée l'objet form contenant les variables des entrées user
                let form = {
                    firstName,
                    lastName,
                    address,
                    city,
                    email
                }

                console.log("form")
                console.log(form)

                //mettre l'objet "recupForm" dans le local storage
                //?
                //let recupForm= localStorage.setItem("form",JSON.stringify(form) )

                // On récup le panier depuis le localstorage 
                //let savedForm = JSON.parse(localStorage.getItem("form"))

                //on recupere un tableau products dans lequel on met les produits selectionnés a chaque fois que l'on en rajoute dans le panier
                const products = []
                if(savedCart){
                    for(let index = 0; index < savedCart.items.length; index++){
                    const teddy = savedCart.items[index];
                    products.push(teddy.id)
                    } 
                }
                else {
                    alert("Veuillez choisir un article sur la page d'accueil")
                    return false
                }
               

                
                //validation cote server
                // Appel l'api avec le panier (form)
                // inspect la réponse
                fetch('http://localhost:2025/api/teddies/order', {
                    method: 'POST', // or 'PUT'
                    headers: {
                      'Content-Type': 'application/json',
                    },
             
                //remplir le corps de la requete au server avec les données que l'on veut recuperer
                    body: JSON.stringify({
                        "contact": {
                            "firstName" : firstName,
                            "lastName" : lastName,
                            "address" : address,
                            "city": city,
                            "email": email,
                        },
                        "products": products
                    }),
                })
                //^
                //voir le resultat du server dans la console
                .then(function(raiponce) {
                    return raiponce.json();
                })
                // .then((raiponce) => {return raiponce.json()})
                //^
                // Dans un .then, si les arguments sont 'undefined',
                // alors il manque éventuellement un return dans la fonction précédente.
                // Ou alors la fonction précédente retourne des valeurs nulles.
                .then((contenu) => {
                    let toServer = localStorage.setItem("toServer",JSON.stringify(contenu) )
                    let savedServer = JSON.parse(localStorage.getItem("toServer"))
                    //console.log(contenu)
                    // Gérer la redirection
                    window.location = '/confirmation.html'
                })
                .catch((error) => {
                    console.error(error)
                })
            } 
    }     


    /*
function usine(matieres) {
    const coton = "coton"
    const lin = "lin"

    const matiere = {
        
    }
    console.log(matieres.coton && matieres.lin)

    if (matieres.coton && matieres.lin) {
        return "t-shirt"
    }

    if (matieres.coton && matieres.tafta) {
        return "pantalon"
    }

    if (matieres.soie && matieres.daim) {
        return "robe"
    }

    return "peux pas fabriquer"
}


const coton = "coton"
const lin = "lin"
const vetement = usine(coton && lin)

console.log(vetement)

*/