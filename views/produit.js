const cardTeddy = document.getElementById("card-teddy")


const urlSearchParams = new URLSearchParams(window.location.search)

const params = Object.fromEntries(urlSearchParams.entries())

console.log(params)


function getOneProduct(teddyId){
    console.log("function get one product");
    fetch (`http://localhost:3000/api/teddies/${teddyId}`)
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
    infoPrice.textContent = `${ted.price}`


    elementTeddy.appendChild(cardImg)
    elementTeddy.appendChild(cardInfos)

    cardImg.appendChild(img)

    cardInfos.appendChild(infoName)
    cardInfos.appendChild(infoPrice)

    cardTeddy.appendChild(elementTeddy)
}

getOneProduct(params.id);





        
           
           
    
    