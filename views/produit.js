

//definition des query params pour manipuler les données de l'element au click
const urlSearchParam = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParam.entries())
console.log(params)


//appelle à la fonction principale qui définie les query strings et recupere un teddy par son id avec le .id qui fait reference au parametre dans l'url
get(params.id)

//Déclaration de la fonction permettant l'appel a l'api pour l'afichage de ses données
function get(teddy) {
  //appelle a l'api
  fetch(`http://localhost:2025/api/teddies/${teddy}`)
    //Gestion de la promesse envoyé par l'api
    .then((resp) => resp.json())
    .then((data) => {
      //console.log(teddy)
      console.log(data)
      const Container = document.getElementById('container')

      const domItem = document.createElement('div')
      const domItemTitle = document.createElement('h1')
      const domItemImgBox = document.createElement('div')
      const domItemInfos = document.createElement('div')
      const domItemAdd = document.createElement('button')
      const domItemCart = document.createElement('a')


      const domItemImg = document.createElement('img')
      const domItemName = document.createElement('div')
      const domItemPrice = document.createElement('div')


      domItem.classList.add('card')
      domItemTitle.textContent = "Produit"
      domItemTitle.classList.add('title')
      domItemImgBox.classList.add('img-card')
      domItemImg.src = data.imageUrl
      domItemImg.classList.add('img')
      domItemImg.width = 300
      domItemImg.height = 300
      domItemImg.setAttribute('alt', 'Teddy\'s picture')
      domItemInfos.classList.add('infos-card')
      domItemAdd.classList.add('ajout')
      domItemAdd.textContent = "Ajouter au panier"
      domItemCart.classList.add('cart-button')

      domItemName.textContent = data.name
      domItemName.classList.add('name')
      domItemPrice.textContent = data.price / 100 + '$'
      domItemPrice.classList.add('price')
      domItemCart.textContent = 'Panier'
      domItemCart.setAttribute('href', 'panier.html')


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


      domItemImgBox.appendChild(domItemImg)
      domItemInfos.appendChild(domItemName)
      domItemInfos.appendChild(domItemPrice)
      domItemInfos.appendChild(domItemDropdown)


      domItem.appendChild(domItemCart)
      domItem.appendChild(domItemTitle)
      domItem.appendChild(domItemImgBox)
      domItem.appendChild(domItemInfos)
      domItem.appendChild(domItemAdd)

      Container.appendChild(domItem)
      

      //au click
      domItemAdd.addEventListener('click', () => {
        // Récupérer la couleur sélectionnée dans une constante
        const selectedColor = data.colors[domItemDropdown.selectedIndex]
        
        //Récuperer les données complètes de l'objet de l'api dans une constante
        const produitItem = { // teddy
          "photo": data.imageUrl,
          "nom": data.name,
          "prix": data.price / 100 + "$",
          "option":selectedColor
        }
        
        // On essaie de récup le panier depuis le localstorage si il y en a un
        const savedCart = JSON.parse(localStorage.getItem('cart'))
        console.log(`savedCart: ${savedCart}`)

       

        if (savedCart) {
          console.log("J'ai deja defini un produit dans le local storage sous la clé cart ")
          savedCart.items.push(produitItem)
        }
        else {
          // Le panier n'existe pas.
          const cart = {
            totalPrice: 0, // prix total
            items: [
              {
                "photo": data.imageUrl,
                "nom": data.name,
                "prix": data.price / 100 + "$",
                "option":selectedColor
              }
            ], // articles ajoutés 
          }

          //on veut injecter les valeurs selectionnées dans le local storage 
         
          localStorage.setItem("cart", JSON.stringify(cart))
           
          // localStorage.setTime('cart', cart)

        }

        //creation d un lien panier pour laisser le choix à l'user au lieu de le forcer

        //ou création d'un pop up pour demander à l'user si il veut ajouter un autre produit ou passer au paiement

        alert("aller au panier ou choisir u autre article ?")
        //window.location.href = "panier.html"



      })
    })
}















/*const cardTeddy = document.getElementById("card-teddy")
const ajout = document.getElementsByClassName("ajout")


const urlSearchParams = new URLSearchParams(window.location.search)
const params = Object.fromEntries(urlSearchParams.entries())
console.log(params)


function getOneProduct(teddyId){
    console.log("function get one product");
    fetch (`http://localhost:3000/api/teddies/${teddyId}`)
    //console.log(teddyId)
    .then(resp =>
        resp.json()
    )
    .then(data => {  
        showOneProduct(data);
    }      
    )
    .catch((e)=> console.log(e));
}

function showOneProduct(ted){
    console.log(ted);

    const elementTeddy = document.createElement('div')
    elementTeddy.classList.add('card')

    const  cardImg = document.createElement('div')
    cardImg.classList.add('card-img')

    const img = document.createElement('img')
    img.setAttribute('src',`${ted.imageUrl}` )
    img.setAttribute('alt', "teddy's picture")

    const cardInfos = document.createElement('div')
    cardInfos.classList.add('card-infos')

    const infoName = document.createElement('p')
    infoName.classList.add('info-name')
    infoName.textContent = `${ted.name}`

    const infoPrice = document.createElement('p')
    infoPrice.classList.add('info-price')
    infoPrice.textContent = `${ted.price/100}$`

    
    const dropdown = document.createElement('select')
    dropdown.name = 'colors'
    dropdown.name = 'colors-select'

    for (const color of ted.colors) {
        console.log(color)
        const option = document.createElement('option')
        option.value = color
        option.text = color
        dropdown.appendChild(option)
    }

    const add = document.createElement('a')
    //add.setAttribute('href', 'panier.html')
    //add.setAttribute('onclick', 'addCart()' )
    add.classList.add('ajout')
    add.textContent = 'ajouter dans mon panier'

    elementTeddy.appendChild(cardImg)
    elementTeddy.appendChild(cardInfos)

    cardImg.appendChild(img)


    cardInfos.appendChild(infoName)
    cardInfos.appendChild(infoPrice)
    cardInfos.appendChild(dropdown)
    cardInfos.appendChild(add)

    cardTeddy.appendChild(elementTeddy)
}


getOneProduct(params.id);



*/