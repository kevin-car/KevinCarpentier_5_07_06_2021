//Règles de Control Regex
let verifString = /[a-zA-Z]{2}$/;
let verifNumber = /[0-9]/;
let verifMail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/y;
let verifSpecialCharacter = /[§!@#$%^&*(),.?":{}|<>]/;

let verifCodePostal = /^[0-9]{5}$/
let verifTelephone = /\+?\(?\d{2,4}\)?[\d\s-]{3,}/

// on retrouve les input grâce à leurs ID
var nomdeFamille = document.querySelector("#clientNom")
var Prenom = document.querySelector("#clientPrenom")
var adresse = document.querySelector("#clientAdresse")
var codePostal = document.querySelector("#clientCodePostal")
var adresseMail = document.querySelector("#clientEmail")
var Telephone = document.querySelector("#clientTelephone")

console.log(verifString.test(nomdeFamille.value))
console.log(Prenom.value)



nomdeFamille.addEventListener("input", function () {
    if (verifString.test(nomdeFamille.value) == true) {
        nomdeFamille.style.border = " 2px solid green"
    }
    if (verifString.test(nomdeFamille.value) == false) {
        nomdeFamille.style.border = " 2px solid red";
    }
}
)

Prenom.addEventListener("input", function () {
    if (verifString.test(Prenom.value) == true) {
        Prenom.style.border = " 2px solid green"
    }
    if (verifString.test(Prenom.value) == false) {
        Prenom.style.border = " 2px solid red";
    }
}
)

adresse.addEventListener("input", function () {
    if (verifSpecialCharacter.test(adresse.value) == true) {
        adresse.style.border = " 2px solid red"
    }
    if (verifSpecialCharacter.test(adresse.value) == false) {
        adresse.style.border = " 2px solid green";
    }
}
)

codePostal.addEventListener("input", function () {
    if (verifCodePostal.test(codePostal.value) == true) {
        codePostal.style.border = " 2px solid green"
    }
    else if (verifCodePostal.test(codePostal.value) == false) {
        codePostal.style.border = " 2px solid red";
    }
}
)

adresseMail.addEventListener("input", function () {
    if (verifMail.test(adresseMail.value) == true) {
        adresseMail.style.border = " 2px solid green"
    }
    else if (verifMail.test(adresseMail.value) == false) {
        adresseMail.style.border = " 2px solid red";
    }
}
)

Telephone.addEventListener("input", function () {
    if (verifTelephone.test(Telephone.value) == true) {
        Telephone.style.border = " 2px solid green"
    }
    else if (verifTelephone.test(Telephone.value) == false) {
        Telephone.style.border = " 2px solid red";
    }
}
)

console.log(nomdeFamille)

// Fonction qui intervient lors du clique du bouton, elle vérifie les champs affiche un promp
// et ajoute une ligne sous l'élément en erreur
let ValiderPAnier = function(){
    if (verifString.test(nomdeFamille.value) == false) {
        window.alert("Merci d'entrer un nom de famille valide")
        
    }
    if (verifString.test(Prenom.value) == false) {
        window.alert("Merci d'entrer un prénom valide")
    }
    if (verifSpecialCharacter.test(adresse.value) == true) {
        window.alert("Merci d'entrer une adresse postale valide")
    }
    else if (verifCodePostal.test(codePostal.value) == false) {
        window.alert("Merci d'entrer un code postal valide")
    }
    else if (verifMail.test(adresseMail.value) == false) {
        window.alert("Merci d'entrer une adresse email correcte")
    }
    else if (verifTelephone.test(Telephone.value) == false) {
        window.alert("Merci d'entrer un numéro de téléphone coorect")
    }
}

// affecter la fonction à mon bouton du formulaire :  "valider la commande"
document.querySelector(".validerLaCommande").addEventListener("click", function(){
    ValiderPAnier()

})
