
main()

function main(){

  //definition des query params pour manipuler les données de l'element au click
  const urlSearchParam = new URLSearchParams(window.location.search)
  const params = Object.fromEntries(urlSearchParam.entries())
  console.log(params)



  //appelle à la fonction principale qui définie les query strings et recupere un teddy par son id avec le .id qui fait reference au parametre dans l'url
  get(params.id)

  //Déclaration de la fonction permettant l'appel à l'api pour l'afichage des données d'un teddy en particulier
  function get(teddy) {

    //appelle a l'api
    fetch(`http://localhost:2025/api/teddies/${teddy}`)

      //Gestion de la promesse envoyé par l'api
      .then((resp) => resp.json())
      .then((data) => {
        //Affichage des éléments du Dom
        console.log(data)

        const Container = document.getElementById('container')

        const domItem = document.createElement('div')
        const domItemBack = document.createElement('a')

        const domItemCart = document.createElement('a')
        const domItemTitle = document.createElement('h1')
        const domItemImgBox = document.createElement('div')
        const domItemInfos = document.createElement('div')
        const domItemAdd = document.createElement('button')

        const domItemImg = document.createElement('img')
        const domItemName = document.createElement('div')
        const domItemPrice = document.createElement('div')

        domItem.classList.add('card')
        domItemBack.textContent = 'retour'
        domItemBack.classList.add('back-button')
        domItemBack.setAttribute ('href', 'index.html')

        domItemCart.textContent = 'Panier'
        domItemCart.classList.add('cart-button')
        domItemCart.setAttribute('href', 'panier.html')
        domItemTitle.textContent = "Produit"
        domItemTitle.classList.add('title')
        domItemImgBox.classList.add('img-card')
        domItemImg.src = data.imageUrl
        domItemImg.classList.add('img')
        domItemImg.width = 300
        domItemImg.height = 300
        domItemImg.setAttribute('alt', 'Teddy\'s picture')
        domItemInfos.classList.add('infos-card')

        domItemName.textContent = data.name
        domItemName.classList.add('name')
        domItemPrice.textContent = data.price / 100 + '$'
        domItemPrice.classList.add('price')

        const domItemDropdown = document.createElement('select')
        domItemDropdown.name = 'colors'
        domItemDropdown.name = 'colors-select'
        domItemDropdown.classList.add('color-select')

        for (const color of data.colors) {
          //console.log(color)
          const option = document.createElement('option')
          option.classList.add('color-option')
          option.value = color
          option.text = color
          domItemDropdown.appendChild(option)
        }
        domItemAdd.classList.add('ajout')
        domItemAdd.textContent = "Ajouter au panier"

        domItemImgBox.appendChild(domItemImg)
        domItemInfos.appendChild(domItemName)
        domItemInfos.appendChild(domItemPrice)
        domItemInfos.appendChild(domItemDropdown)

        domItem.appendChild(domItemBack)
        domItem.appendChild(domItemCart)
        domItem.appendChild(domItemTitle)
        domItem.appendChild(domItemImgBox)
        domItem.appendChild(domItemInfos)
        domItem.appendChild(domItemAdd)

        Container.appendChild(domItem)

        //Appel aux évènements du panier
        events()

        //Déclaration de la fonction events
        function events(){
          
          //au click
          domItemAdd.addEventListener('click', () => {
            
            // Récupérer la couleur sélectionnée dans une constante
            const selectedColor = data.colors[domItemDropdown.selectedIndex]
            
            //Récuperer les données complètes de l'objet de l'api dans une constante
            let produitItem = { // teddy

              "id": data._id,
              "photo": data.imageUrl,
              "nom": data.name,
              "prix": data.price / 100,
              "option":selectedColor,
            }
            //console.log(produitItem)
            
            // On essaie de récup le panier depuis le localstorage si il y en a un
            let savedCart = JSON.parse(localStorage.getItem("cart"))
          
            //si il y a deja un produit dans le local storage
            if (savedCart) {
              console.log("J'ai deja defini un produit dans le local storage sous la clé cart ")
              savedCart.items.push(produitItem)
              // Le nouveau résultat = résultat précédent + produit qu'on vient d'ajouter
              savedCart.totalPrice = parseFloat(savedCart.totalPrice + produitItem.prix)
              localStorage.setItem("cart", JSON.stringify(savedCart))
              console.log(savedCart)
            }
            else {
              // Le panier n'existe pas.
              //création de la clé
              let Cart  = {
                // prix total
                totalPrice: 0,
                // articles ajoutés
                items: [],
              }
              Cart.items.push(produitItem)
              Cart.totalPrice = parseFloat(Cart.totalPrice + produitItem.prix)
              localStorage.setItem("cart", JSON.stringify(Cart))
              //console.log(Cart)
            }

            //Appel à la fonction popup
            popup()

            //Déclaration de la fonction popup
            function popup(){
              alert("Article ajouté au panier, aller au panier ou choisir un autre article ")
            }
          })
        }

       
      })
  }
}