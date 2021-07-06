//Règles de Control Regex
let verifString = /[a-zA-Z]{2}$/;
let verifNumber = /[0-9]/;
let verifMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let verifSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;
let verifAdresse =  /([0-9]*) ?([a-zA-Z,\. ]*) ?([0-9]{5}) ?([a-zA-Z]*)/

let verifCodePostal = /^[0-9]{5}$/
let verifTelephone = /\+?\(?\d{2,4}\)?[\d\s-]{8,}/

// on retrouve les input grâce à leurs ID
var nomdeFamille = document.querySelector("#clientNom")
var Prenom = document.querySelector("#clientPrenom")
var adresse = document.querySelector("#clientAdresse")
var codePostal = document.querySelector("#clientCodePostal")
var adresseMail = document.querySelector("#clientEmail")
var Telephone = document.querySelector("#clientTelephone")

// On vé&rifie si les données entrées sont correcte
// Si c'est le cas, le commentaire reste (ou devient) inexistant
// S'il est mauvais le commentaire apparait en rouge

nomdeFamille.addEventListener("input", function () {
    if (verifString.test(nomdeFamille.value) == true) {
        nomdeFamille.style.border = " 2px solid green"
        document.querySelector(".comErreurNom").style.display = "none"

    }
    else if (verifString.test(nomdeFamille.value) == false) {
        nomdeFamille.style.border = " 2px solid red";
        document.querySelector(".comErreurNom").style.display = "block"
        document.querySelector(".comErreurNom").style.color = "red"
    }
})

Prenom.addEventListener("input", function () {
    if (verifString.test(Prenom.value) == true) {
        Prenom.style.border = " 2px solid green"
        document.querySelector(".comErreurPrenom").style.display = "none"
    }
    else if (verifString.test(Prenom.value) == false) {
        Prenom.style.border = " 2px solid red";
        document.querySelector(".comErreurPrenom").style.display = "block"
        document.querySelector(".comErreurPrenom").style.color = "red"
    }
})

adresse.addEventListener("input", function () {
    if (verifSpecialCharacter.test(adresse.value) == true) {
        adresse.style.border = " 2px solid red";
        document.querySelector(".comErreurAdresse").style.display = "block"
        document.querySelector(".comErreurAdresse").style.color = "red"
    }
    else if (verifSpecialCharacter.test(adresse.value) == false) {
        adresse.style.border = " 2px solid green";
        document.querySelector(".comErreurAdresse").style.display = "none"
        document.querySelector(".comErreurAdresse").style.color = "green"
    }
})

codePostal.addEventListener("input", function () {
    if (verifCodePostal.test(codePostal.value) == true) {
        codePostal.style.border = " 2px solid green"
        document.querySelector(".comErreurCodePostal").style.display = "none"
    }
    else if (verifCodePostal.test(codePostal.value) == false) {
        codePostal.style.border = " 2px solid red";
        document.querySelector(".comErreurCodePostal").style.display = "block"
        document.querySelector(".comErreurCodePostal").style.color = "red"
    }
})

adresseMail.addEventListener("input", function () {
    if (verifMail.test(adresseMail.value) == true) {
        adresseMail.style.border = " 2px solid green"
        document.querySelector(".comErreurMail").style.display = "none"
    }
    else if (verifMail.test(adresseMail.value) == false) {
        adresseMail.style.border = " 2px solid red";
        document.querySelector(".comErreurMail").style.display = "block"
        document.querySelector(".comErreurMail").style.color = "red"
    }
})

Telephone.addEventListener("input", function () {
    if (verifTelephone.test(Telephone.value) == true) {
        Telephone.style.border = " 2px solid green"
        document.querySelector(".comErreurTelephone").style.display = "none"
    }
    else if (verifTelephone.test(Telephone.value) == false) {
        Telephone.style.border = " 2px solid red";
        document.querySelector(".comErreurTelephone").style.display = "block"
        document.querySelector(".comErreurTelephone").style.color = "red"
    }
})



    //Préparation de l'élément Articles pour la requete POST
    var monPanierLocalStorage = localStorage.panier
    var myPanierlocalStorageparse = JSON.parse(monPanierLocalStorage)

const requetePOST = function () {
    //Préparation de l'élément Articles pour la requete POST
    var monPanierLocalStorage = localStorage.panier
    var myPanierlocalStorageparse = JSON.parse(monPanierLocalStorage)
        //Préparation de l'élément Articles pour la requete POST
    let contact = {
        lastName: document.querySelector("#clientNom").value,
        firstName: document.querySelector("#clientPrenom").value,
        address: document.querySelector("#clientAdresse").value,
        city: document.querySelector(".blocSelecteur__selectionVille").value,
        email: document.querySelector("#clientEmail").value
    }

    // J'importe et structure les données pour convenir à la requete POST
    let products = myPanierlocalStorageparse
    productsID = []
    for(i=0 ; i < products.length ; i++){
        productsID.push(myPanierlocalStorageparse[i].theID)
    }

    // Je définis la version finale de mon élément pour la fetch 
    let json = { contact: contact, products: productsID }

    // La requete fetch(POST)
    const promise01 = function requetePost() {
        fetch("http://localhost:3000/api/teddies/order",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "post",
                body: JSON.stringify(json)
            })
            .then(function (res) { console.log(res)
                document.querySelector("#commandeOK").innerHTML = console.log(res.orderId)

            })
            .catch(function (res) { console.log(res) })
    }
        promise01()
}


// cela lance la validation du panier et la requete API, si le formulaire n'est pas bon, la commande est bloquée par une page d'alerte
document.querySelector(".validerLaCommande").addEventListener("click", function () {
    if(document.querySelector(".monPrixTotal").textContent == "0€" ){
        window.alert('votre panier est vide')
    }
    else if(verifString.test(nomdeFamille.value) &&
        verifString.test(Prenom.value) == true && 
        verifSpecialCharacter.test(adresse.value) == false && 
        document.querySelector( ".blocSelecteur__selectionVille") !== "" &&
        verifCodePostal.test(codePostal.value) == true && 
        verifMail.test(adresseMail.value) == true && 
        verifTelephone.test(Telephone.value) == true)
        {
        requetePOST()
        window.localStorage.clear()
        document.querySelector("#commandeOK").style.display = "block"
        document.querySelector(".formulaire2 ").innerHTML = ""
        document.querySelector(".container__button").innerHTML = ""
        }
        else
        {
            window.alert("le formulaire n'est pas correctement rempli")
        }
    })