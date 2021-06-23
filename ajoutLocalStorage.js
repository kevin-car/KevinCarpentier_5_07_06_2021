// on créé un model qui servira de base pour le modele d'import d'article
class AjoutPanier {
    constructor(name, price, quantite, couleur, theID) {
        this.name = name;
        this.price = price;
        this.quantite = quantite;
        this.couleur = couleur;
        this.theID = theID
    }
}
// Création de la fonction qui récupère toutes les infos lors du clique sur le bouton
// Définir dans une variable quel bouton sera écouté
let button = document.querySelector(".btn-success")
// Ecouteur d'événement, lors du clique, on récupère toutes les infos
button.addEventListener("click", function () {
    quantite = document.querySelector(".blocQuantite__prix--quantite").value
    nom = document.querySelector(".blocDescription--nomProduit").innerHTML
    couleur = document.querySelector(".blocSelecteur__selectionCouleur").value
    prixUnitaire = document.querySelector(".blocQuantite__prix strong").innerHTML
    theID = $_GET("data-id")

    let articleAjout = new AjoutPanier(nom, prixUnitaire, quantite, couleur, theID)

    // si le panier n'est pas présent, je créé le tableau qui contiendra mes articles [{objets}, {objet}]
    if (localStorage.panier == null) {
        localStorage.setItem("panier", "[]")
    }



    // on recupère nos objets déjà présents dans le panier
    var monlocalStorage = localStorage.getItem("panier")
    // on modifie ces données pour les récupérer dans un tableau (dans une variable)
    var monlocalStorageparse = JSON.parse(monlocalStorage)

    // je créé une variable, celle-ci définira si on doit créé une nouvelle ligne dans le tableau
    var AjoutNouvelleLigne = true

    // on boucle sur tous les éléments du tableau pour vérifier s'il contient le même nom 
    for (i = 0; i < monlocalStorageparse.length; i++) {
        if (monlocalStorageparse[i].name == articleAjout.name && monlocalStorageparse[i].couleur == articleAjout.couleur) {
            // on convertit les données en nombre pour pouvoir être ajoutées ensemble
            monlocalStorageparse[i].quantite = Number(monlocalStorageparse[i].quantite)
            articleAjout.quantite = Number(articleAjout.quantite)
            // on modifie seulement la quantité
            monlocalStorageparse[i].quantite = monlocalStorageparse[i].quantite + articleAjout.quantite
            // On remet ce tableau sous forme de string
            var monlocalStorageJSON = JSON.stringify(monlocalStorageparse)
            // on renvoie ce nouvel article dans le panier
            localStorage.setItem("panier", monlocalStorageJSON)
            // On désactive le fait de créer une nouvelle ligne
            AjoutNouvelleLigne = false
            // On stoppe la boucle
            break
        }
    }
        // FONCTION si on ne trouve pas la ligne dans le tableau, alors on en créé une nouvelle
        function AjoutSiTrue() {
            // on ajout la nouvelle donnée dans ce tableau
            monlocalStorageparse.push(articleAjout)
            // On remet ce tableau sous forme de string
            var monlocalStorageJSON = JSON.stringify(monlocalStorageparse)
            // on renvoie ce nouvel article dans le panier
            localStorage.setItem("panier", monlocalStorageJSON)
        }
        // Si l'ajout n'a pas été annulé par la boucle, on créé la ligne
        if (AjoutNouvelleLigne == true) {
            AjoutSiTrue()
        }






})



