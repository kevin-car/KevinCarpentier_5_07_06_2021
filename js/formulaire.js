//Règles de Control Regex
let verifString = /[a-zA-Z]{2}$/;
let verifNumber = /[0-9]/;
let verifMail = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i;
let verifSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;

let verifCodePostal = /^[0-9]{5}$/
let verifTelephone = /\+?\(?\d{2,4}\)?[\d\s-]{8,}/

// on retrouve les input grâce à leurs ID
var nomdeFamille = document.querySelector("#clientNom")
var Prenom = document.querySelector("#clientPrenom")
var adresse = document.querySelector("#clientAdresse")
var codePostal = document.querySelector("#clientCodePostal")
var adresseMail = document.querySelector("#clientEmail")
var Telephone = document.querySelector("#clientTelephone")

// on retrouve les input grâce à leurs ID
var GLOBAL = {
//     Input_DOM : {
//         nomdeFamille: document.querySelector("#clientNom"),
//         Prenom : document.querySelector("#clientPrenom"),
//         adresse : document.querySelector("#clientAdresse"),
//         codePostal : document.querySelector("#clientCodePostal"),
//         adresseMail : document.querySelector("#clientEmail"),
//         Telephone : document.querySelector("#clientTelephone")
//    },
//    Commentaire : {
//         EmpComm_nomdeFamille : document.querySelector(".comErreurNom"),
//         EmpComm_Prenom : document.querySelector(".comErreurPrenom"),
//         EmpComm_adresse : document.querySelector(".comErreurAdresse"),
//         EmpComm_codePostal : document.querySelector(".comErreurCodePostal"),
//         EmpComm_adresseMail : document.querySelector(".clientEmail"),
//         EmpComm_Telephone : document.querySelector(".clientTelephone")
//    },
//    Verification : {
//         control_nomdeFamille : verifString,
//         control_Prenom : verifString,
//         control_adresse : verifSpecialCharacter,
//         control_codePostal :verifCodePostal,
//         control_adresseMail : verifMail,
//         controlTelephone : verifTelephone
//    },

   nomdeFamille : {
    emplacement: document.querySelector("#clientNom"),
    EmpComm : document.querySelector(".comErreurNom"),
    control : verifString,
   },
   Prenom : {
    emplacement: document.querySelector("#clientPrenom"),
    EmpComm : document.querySelector(".comErreurPrenom"),
    control : verifString,
   },
   adresse : {
    emplacement: document.querySelector("#clientAdresse"),
    EmpComm : document.querySelector(".comErreurAdresse"),
    control : verifSpecialCharacter,
   },
   codePostal : {
    emplacement: document.querySelector("#clientCodePostal"),
    EmpComm : document.querySelector(".comErreurCodePostal"),
    control : verifCodePostal,
   },
   adresseMail : {
    emplacement: document.querySelector("#clientEmail"),
    EmpComm : document.querySelector(".comErreurMail"),
    control : verifMail,
   },
   Telephone : {
    emplacement: document.querySelector("#clientEmail"),
    EmpComm : document.querySelector(".comErreurTelephone"),
    control : verifTelephone,
   },
}



for(var champ in GLOBAL){
    GLOBAL[champ].emplacement.addEventListener("input", function () {
        if (GLOBAL[champ].control.test(GLOBAL[champ].emplacement.value) == true) {
            GLOBAL[champ].emplacement.style.border = " 2px solid green"
            GLOBAL[champ].EmpComm.style.display = "none"
    
        }
        else if (GLOBAL[champ].control.test(GLOBAL[champ].emplacement.value) == false) {
            GLOBAL[champ].emplacement.style.border = " 2px solid red";
            GLOBAL[champ].EmpComm.style.display = "block"
            GLOBAL[champ].EmpComm.style.color = "red"
        }
    })
}


// Emplacements des commentaires 


// Verification a effectuer 




// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

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
        adresse.style.border = " 2px solid green"
        document.querySelector(".comErreurAdresse").style.display = "none"
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
            .then(function (res) { console.log(res) })
            .catch(function (res) { console.log(res) })
    }
    promise01()
}

// affecter la fonction à mon bouton du formulaire :  "valider la commande"
ValiderPanier = function(){

}


// cela lance la validation du panier et la requete API 
document.querySelector(".validerLaCommande").addEventListener("click", function () {
    if (verifString.test(nomdeFamille.value) == true &&
        verifString.test(Prenom.value) == true && 
        verifSpecialCharacter.test(adresse.value) == false && 
        verifCodePostal.test(codePostal.value) == true && 
        verifMail.test(adresseMail.value) == true && 
        verifTelephone.test(Telephone.value) == true)
    {
        console.log('cest tout bon ')
        requetePOST()
    }else{
        console.log('Vérifier les champs')
    }})

