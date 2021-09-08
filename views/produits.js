
function main() {

    //trouver une fonction pour afficher ma liste d'article 
    console.log("je suis heureuse");

    fetch('http://localhost:3000/api/teddies')
    .then((resp) => console.log(resp.json()));

}

main();