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
    }})

Prenom.addEventListener("input", function () {
    if (verifString.test(Prenom.value) == true) {
        Prenom.style.border = " 2px solid green"
        document.querySelector(".comErreurPrenom").style.display = "none"
    }
    else if (verifString.test(Prenom.value) == false) {
        Prenom.style.border = " 2px solid red";
        document.querySelector(".comErreurPrenom").style.display = "block"
        document.querySelector(".comErreurPrenom").style.color = "red"
    }})

adresse.addEventListener("input", function () {
    if (verifSpecialCharacter.test(adresse.value) == false) {
        adresse.style.border = " 2px solid green"
        document.querySelector(".comErreurAdresse").style.display = "none"
    }
    else if (verifSpecialCharacter.test(adresse.value) == true) {
        adresse.style.border = " 2px solid red";
        document.querySelector(".comErreurAdresse").style.display = "block"
        document.querySelector(".comErreurAdresse").style.color = "red"
    }})

codePostal.addEventListener("input", function () {
    if (verifCodePostal.test(codePostal.value) == true) {
        codePostal.style.border = " 2px solid green"
        document.querySelector(".comErreurCodePostal").style.display = "none"
    }
    else if (verifCodePostal.test(codePostal.value) == false) {
        codePostal.style.border = " 2px solid red";
        document.querySelector(".comErreurCodePostal").style.display = "block"
        document.querySelector(".comErreurCodePostal").style.color = "red"
    }})

adresseMail.addEventListener("input", function () {
    if (verifMail.test(adresseMail.value) == true) {
        adresseMail.style.border = " 2px solid green"
        document.querySelector(".comErreurMail").style.display = "none"
    }
    else if (verifMail.test(adresseMail.value) == false) {
        adresseMail.style.border = " 2px solid red";
        document.querySelector(".comErreurMail").style.display = "block"
        document.querySelector(".comErreurMail").style.color = "red"
    }})

Telephone.addEventListener("input", function () {
    if (verifTelephone.test(Telephone.value) == true) {
        Telephone.style.border = " 2px solid green"
        document.querySelector(".comErreurTelephone").style.display = "none"
    }
    else if (verifTelephone.test(Telephone.value) == false) {
        Telephone.style.border = " 2px solid red";
        document.querySelector(".comErreurTelephone").style.display = "block"
        document.querySelector(".comErreurTelephone").style.color = "red"
    }})

console.log(nomdeFamille)

// Fonction qui intervient lors du clique du bouton, elle vérifie les champs affiche un promp
// et ajoute une ligne sous l'élément en erreur
let ValiderPAnier = function () {
    if(document.querySelector(".monPrixTotal").innerText == "0€"){
        window.alert("Votre panier est vide")
    }else{
        if (verifString.test(nomdeFamille.value) == false) {
            window.alert("Merci d'entrer un nom de famille valide")
        }
        else if (verifString.test(Prenom.value) == false) {
            window.alert("Merci d'entrer un prénom valide")
        }
        else if (verifSpecialCharacter.test(adresse.value) == true) {
            window.alert("Merci d'entrer une adresse postale valide")
        }
        else if (verifCodePostal.test(codePostal.value) == false) {
            window.alert("Merci d'entrer un code postal valide")
        }
        else if (verifMail.test(adresseMail.value) == false) {
            window.alert("Merci d'entrer une adresse email correcte")
        }
        else if (verifTelephone.test(Telephone.value) == false) {
            window.alert("Merci d'entrer un numéro de téléphone correct")
            }
        else{
            window.alert("Merci pour votre commande")
        }
    }
}
// affecter la fonction à mon bouton du formulaire :  "valider la commande"
document.querySelector(".validerLaCommande").addEventListener("click", function () {
    ValiderPAnier()
})
