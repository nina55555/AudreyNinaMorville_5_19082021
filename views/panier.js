
//declaration des variables globales
const boxCart = document.getElementById('box-cart')
const ajout = document.getElementsByClassName('ajout')

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
        //const allPrices = []

        console.log(savedCart.totalPrice)

        const domItemTotal = document.createElement('div')
        domItemTotal.classList.add('total-content')

        const domItemTotal1 = document.createElement('div')
        domItemTotal1.classList.add('total-price')
        domItemTotal1.textContent = `total:${savedCart.totalPrice}$`

        domItemTotal.appendChild(domItemTotal1)
        boxCart.appendChild(domItemTotal)


        //on crée un evenement au click qui récupère les données du panier 
        document.getElementById("button").addEventListener ("click", (e) =>{
            e.preventDefault()
            //declaration d'une fonction pour recuperer les données du formulaire
            send()
            function send (){
                //on verifie les entrées user
                const inputFirstName = document.querySelector("#firstName")
                let firstName = ''
                if (inputFirstName) {
                    firstName = typeof inputFirstName.value === 'string' ? inputFirstName.value : firstName
                }
                const inputLastName = document.querySelector("#lastName")
                let lastName = ''
                if (inputLastName) {
                    lastName = typeof inputLastName.value === 'string' ? inputLastName.value : lastName
                }
                const inputAdress = document.querySelector("#adress")
                let address = ''
                if (inputAdress) {
                    address = typeof inputAdress.value === 'string' ? inputAdress.value : adress
                }
                const inputCity = document.querySelector("#city")
                let city = ''
                if (inputCity) {
                    city = typeof inputCity.value === 'string' ? inputCity.value : 
                city}
                const inputEmail = document.querySelector("#email")
                let email = ''
                if (inputEmail) {
                    email = typeof inputEmail.value === 'string' ? inputEmail.value : 
                email}
                
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
                let recupForm= localStorage.setItem("form",JSON.stringify(form) )

                // On récup le panier depuis le localstorage 
                let savedForm = JSON.parse(localStorage.getItem("form"))

                /*
                //compiler les deux clés à recuperer dans une variable 
                let toSendToServer = {
                    savedCart,
                    savedForm
                }
                console.log("toSendToServer")
                console.log(toSendToServer)

                */

                //mettre l'objet "recupForm" dans le local storage
                /*
                let toServer= localStorage.setItem("toServer",JSON.stringify(toSendToServer) )
                */

                // On récup le panier depuis le localstorage 
                /*
                let savedServer = JSON.parse(localStorage.getItem("toServer"))
                */


                //on recupere un tableau products dans lequel on met les produits selectionnés a chaque fois que l'on en rajoute dans le panier
                const products = []

                for(let index = 0; index < savedCart.items.length; index++){
                    const teddy = savedCart.items[index];
                    products.push(teddy.id)
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
                //voir le resultat du server ds la console
                .then((raiponce) => raiponce.json())
                //^
                .then((contenu) => {
                    console.log("contenu de la promesses .json")
                    console.log(contenu)

                    let toServer = localStorage.setItem("toServer",JSON.stringify(contenu) )

                    let savedServer = JSON.parse(localStorage.getItem("toServer"))

                    console.log(savedServer)

                })
                .catch((error) => {
                    console.error(error)
                })

                // Gérer la redirection
                //window.location = '/confirmation.html'
                window.location = '/confirmation.html'
            } 
        })  
    }     

           


