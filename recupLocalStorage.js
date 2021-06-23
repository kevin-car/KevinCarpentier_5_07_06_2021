
    // je recupère le localStorage
    localStorageBrut = localStorage.panier
    console.log(localStorageBrut)
    // je le convertis en donnée utilisable
    localStorageObjets = JSON.parse(localStorageBrut)
    console.log(localStorageObjets)


// je créé la boucle qui va alimenter le tableau 
console.log()

    for(i=0; i<localStorageObjets.length; i++){
        // Je créé les colonnes
        let colonneArticle = document.createElement("td")
        let colonneCouleur = document.createElement("td")
        let colonneQuantite = document.createElement("td")
        let colonnePrixTTC = document.createElement("td")
        let colonnePrixTotal = document.createElement("td")
        // j'alimente mes colonnes (les variables en tout cas)
        colonneArticle.innerHTML = localStorageObjets[i].name
        colonneCouleur.innerHTML = localStorageObjets[i].couleur
        colonneQuantite.innerHTML = localStorageObjets[i].quantite
        colonnePrixTTC.innerHTML = localStorageObjets[i].price + "€" ;
        colonnePrixTotal.innerHTML = localStorageObjets[i].quantite * localStorageObjets[i].price + "€";
        colonnePrixTotal.classList.add("price")
        // J'affecte les colonnes à une lignes 
        let myLigne = document.createElement("tr")
        myLigne.setAttribute("id-color", localStorageObjets[i].theID + localStorageObjets[i].couleur)
        myLigne.appendChild(colonneArticle)
        myLigne.appendChild(colonneCouleur)
        myLigne.appendChild(colonneQuantite)
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
    for(i=0 ; i < PrixPanier.length ; i++){
        listePrix.push(PrixPanier[i].textContent)
    }
    // J'enlève les sigle € et je convertir les strings en nombre
    for(i=0 ; i < PrixPanier.length ; i++){
        listePrix[i] = listePrix[i].substring("€",listePrix[i].length-1)
        listePrix[i] = parseInt(listePrix[i])
        console.log(listePrix[i])
    }
    console.log(listePrix)

    // Créer la variable qui contient le prix total
    var MyPriceTotal = 0
    // faire une boucle qui ajoutera la somme au prix total
    for(i=0; i<listePrix.length ; i++){
        MyPriceTotal = MyPriceTotal + listePrix[i]
        console.log(MyPriceTotal)
    }
    // On renvoie la somme total dans la case prévue à cet effet
    prixTotal.textContent = MyPriceTotal + "€"
    console.log(prixTotal)