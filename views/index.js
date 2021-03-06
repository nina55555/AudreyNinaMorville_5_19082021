
  //Appel à la fonction callApi
  callApi()

  //Déclaration de la fonction callApi
  function callApi (){
     //appel à l'API de la liste des teddies
    fetch('http://localhost:2025/api/teddies')
    //Gestion de la promesse
    .then((response) => response.json())
    .then(function (data) {
    //Affichage des données une fois la reponse envoyée
      const container = document.getElementById("teddy")
      for (const produit of data) {
        const domItem = document.createElement('div')
        const domItemImg = document.createElement('img')
        const domItemInfos = document.createElement('div')

        domItem.classList.add('card')
        domItemImg.src = produit.imageUrl
        domItemImg.classList.add('card-img')
        domItemImg.setAttribute('alt', "teddy's picture")
        domItemInfos.classList.add('card-infos')

        const domItemName = document.createElement('div')
        domItemName.classList.add('info-name')
        domItemName.textContent = produit.name
        const domItemPrice = document.createElement('div')
        domItemPrice.classList.add('info-price')
        domItemPrice.textContent = produit.price/100 +`$`

        domItemInfos.appendChild(domItemName)
        domItemInfos.appendChild(domItemPrice)

        domItem.appendChild(domItemImg)
        domItem.appendChild(domItemInfos)
       
        container.appendChild(domItem)

        // Appel à la fonction event
        event()
        //Déclaration de la fonction event au click
        function event (){
          domItem.addEventListener('click', () => {
          window.location = `produit.html?id=${produit._id}`
          })
        }
      }
    })
  }    
    