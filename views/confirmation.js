
//on recupère les elements dont on a besoin pour constuer la page.
//1.le contenu de la reponse du server stocké dans le local storage 
let savedServer = JSON.parse(localStorage.getItem("toServer"))
//2.le contenu de la commande du client stocké dans le local storage
let savedCart = JSON.parse(localStorage.getItem("cart"))
//3.le container qui va recevoir les données injectées
const containerC = document.getElementById('content')

//on appelle la fonction mainA et on la crée pour qu'elle affiche les données du local storage
mainA()
    function mainA (){
        const domItemTextA =document.createElement('div')
        domItemTextA.classList.add('fulfill')
        domItemTextA.textContent = `Merci pour votre commande n°${savedServer.orderId}, d'un montant total de: ${savedCart.totalPrice}$, nous esperons vous revoir bientot.`

        containerC.appendChild(domItemTextA)
    }
