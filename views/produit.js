const cardTeddy = document.getElementById("card-teddy")




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
    infoPrice.textContent = `${ted.price}$`

    const dropdown = document.createElement('div')
    dropdown.classList.add('dropdown-custom')
    dropdown.textContent = "Personnalisation"

    const cust = document.createElement('ul')
    cust.classList.add('cust-ul')

    const link = document.createElement('li')
    link.classList.add('link-a')

    
    const opt1 = document.createElement('a')
    opt1.setAttribute('href', '#')
    opt1.classList.add('opt1')
    opt1.textContent ='option1'

    const link2 = document.createElement('li')
    link2.classList.add('link-b')

    const opt2 = document.createElement('a')
    opt2.setAttribute('href', '#')
    opt2.classList.add('opt2')
    opt2.textContent ='option2'


    elementTeddy.appendChild(cardImg)
    elementTeddy.appendChild(cardInfos)

    cardImg.appendChild(img)

    dropdown.appendChild(cust)

    cust.appendChild(link)
    cust.appendChild(link2)

    link.appendChild(opt1)
    link2.appendChild(opt2)

    cardInfos.appendChild(infoName)
    cardInfos.appendChild(infoPrice)
    cardInfos.appendChild(dropdown)

    cardTeddy.appendChild(elementTeddy)
}


getOneProduct(params.id);







        
           
           
    
    