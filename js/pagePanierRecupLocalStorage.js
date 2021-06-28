if (localStorage.panier == null) {
    localStorage.setItem("panier", "[]")
}
// je recupère le localStorage

localStorageBrut = localStorage.panier
// je le convertis en donnée utilisable
localStorageObjets = JSON.parse(localStorageBrut)


// je créé la boucle qui va alimenter le tableau 
for (i = 0; i < localStorageObjets.length; i++) {
    // Je créé les colonnes
    let colonneArticle = document.createElement("td")
    let colonneCouleur = document.createElement("td")
    let colonneQuantite = document.createElement("td")
    let colonneBoutonSupprimer = document.createElement("td")
    colonneBoutonSupprimer.innerHTML = (`<button  nameColor="${localStorageObjets[i].name}${localStorageObjets[i].couleur}" id="${localStorageObjets[i].name}" type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> `)
    let colonnePrixTTC = document.createElement("td")
    let colonnePrixTotal = document.createElement("td")
    // j'alimente mes colonnes (les variables en tout cas)
    colonneArticle.innerHTML = localStorageObjets[i].name
    colonneCouleur.innerHTML = localStorageObjets[i].couleur
    colonneQuantite.innerHTML = localStorageObjets[i].quantite
    colonnePrixTTC.innerHTML = localStorageObjets[i].price + "€";
    colonnePrixTotal.innerHTML = localStorageObjets[i].quantite * localStorageObjets[i].price + "€";
    colonnePrixTotal.classList.add("price")
    // J'affecte les colonnes à une lignes 
    let myLigne = document.createElement("tr")
    myLigne.setAttribute("name-color", localStorageObjets[i].name + localStorageObjets[i].couleur)
    myLigne.appendChild(colonneArticle)
    myLigne.appendChild(colonneCouleur)
    myLigne.appendChild(colonneQuantite)
    myLigne.appendChild(colonneBoutonSupprimer)
    myLigne.appendChild(colonnePrixTTC)
    myLigne.appendChild(colonnePrixTotal)
    // je vais chercher l'emplacement du DOM et j'y insère ma nouvelle ligne
    let coeurDuTableau = document.querySelector(".coeurTableau")
    coeurDuTableau.appendChild(myLigne)
}

// calculer le prix total 
// identifier la case prix total
var prixTotal = document.querySelector(".monPrixTotal")
// identifier les différents prix
var PrixPanier = document.querySelectorAll(".price")
// Je créé un tableau qui contiendra les prix
listePrix = []
// je créé une boucle qui incrémentera mon tableau avec les prix 
for (i = 0; i < PrixPanier.length; i++) {
    listePrix.push(PrixPanier[i].textContent)
}
// J'enlève les sigle € et je convertir les strings en nombre
for (i = 0; i < PrixPanier.length; i++) {
    listePrix[i] = listePrix[i].substring("€", listePrix[i].length - 1)
    listePrix[i] = parseInt(listePrix[i])
}

// Créer la variable qui contient le prix total
var MyPriceTotal = 0
// faire une boucle qui ajoutera la somme au prix total
for (i = 0; i < listePrix.length; i++) {
    MyPriceTotal = MyPriceTotal + listePrix[i]
}
// On renvoie la somme total dans la case prévue à cet effet
prixTotal.textContent = MyPriceTotal + "€"

