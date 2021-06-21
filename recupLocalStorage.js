

// on créé la ligne du tableau 
var ligneCommande = document.createElement("tr")
    ligneCommande.classList.add("myArticle")

    myArticle = document.createElement("td")
    colonneArticle = document.createElement("td")
    colonneDescription = document.createElement("td")
    colonneQuantite = document.createElement("td")
    colonnePrixU = document.createElement("td")
    colonnePrixTotal = document.createElement("td")

    ligneCommande.appendChild(myArticle) 
    ligneCommande.appendChild(colonneArticle)
    ligneCommande.appendChild(colonneQuantite)
    ligneCommande.appendChild(colonnePrixU)
    ligneCommande.appendChild(colonnePrixTotal)

    // racine du tableau 
    var racineTableau = document.querySelector(".table-striped>tbody")
    racineTableau.appendChild(ligneCommande)

