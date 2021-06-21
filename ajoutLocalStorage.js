class AjoutPanier{
    constructor (name, price, quantite, couleur){
        this.name = name;
        this.price = price;
        this.quantite = quantite;
        this.couleur = couleur;
    }
}
// Création de la fonction qui récupère toutes les infos lors du clique sur le bouton
    // Définir dans une variable quel bouton sera écouté
    let button = document.querySelector(".btn-success")
    // Ecouteur d'événement, lors du clique, on récupère toutes les infos
button.addEventListener("click", function(){
    quantite = document.querySelector(".blocQuantite__prix--quantite").value
    console.log(quantite)
    nom = document.querySelector(".blocDescription--nomProduit").innerHTML
    console.log(nom)
    couleur = document.querySelector(".blocSelecteur__selectionCouleur").value
    console.log(couleur)
    prixUnitaire = document.querySelector(".blocQuantite__prix strong").innerHTML
    console.log(prixUnitaire)

// incrémenter le local storage 

    // Index au incrémenté  
    let indexKey = localStorage.length + 1 

    let articleAjout = new AjoutPanier(nom, prixUnitaire, quantite, couleur)
    console.log(articleAjout)
    var articlesJson = JSON.stringify(articleAjout)
    console.log(articlesJson)

    var ArticleforBAsket = typeof(JSON)

    ArticleforBAsket = ArticleforBAsket.push(articlesJson)

    console.log(ArticleforBAsket)
    // console.log(panier.json)

   })
   


