// Fonction Principale 
Main()
async function Main(){
    const articles = await getArticle()
    const i =  recupI(articles)
    displayElements(i, articles)
    GetArticleforBasket(articles)
}

// Ma fetch principale, recupération brut des Articles de l'API 
function getArticle(){
    return fetch("http://localhost:3000/api/teddies/")
    .then(function (response) {
        return response.json()
    })
    .then(function (articles) {
        // return article
            return(articles)
    })
    .catch(function (error) {
        console.log("erreur du get article")
    })
}

// fonction permettant d'obtenir un paramètre url
function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : ''
		}
	)

	if ( param ) {
		return vars[param] ? vars[param] : null	
	}
	return vars;
}
// Obtenir le Data-Id de l'URL
var data = $_GET('data-id')


// fonction qui recupère l'index dans l'API
function recupI (articles){
    for(i=0 ; i<articles.length; i++){
        // console.log(articles[i]._id)
        if(articles[i]._id == data){
            return(i)
        }
    }
}


// Modifier les Elements 
function displayElements(i, articles){
    // Image
    let imageAModifier = document.querySelector(".photoArticle img")
        imageAModifier.setAttribute("src", articles[i].imageUrl)
        imageAModifier.setAttribute("alt", articles[i].description)
    // Texte 
    let nomAModifier = document.querySelector(".blocDescription--nomProduit")
        nomAModifier.innerHTML = articles[i].name
    // description
    let description = document.querySelector(".blocDescription--description")
        description.innerHTML = articles[i].description    
    // Prix
    let prixAModifier = document.querySelector(".blocQuantite__prix")
        prixAModifier.innerHTML = "Prix unitaire : <strong>" + articles[i].price/100 + "<strong> €"
    // Titre 
    let titreAModifier = document.querySelector("title")
        titreAModifier.innerHTML = "Orinoco : " +  articles[i].name 

    let couleursAAjouter = document.querySelector(".blocDescription--couleurs")

        for(j=0; j<articles[i].colors.length ; j++){

            let colorName = articles[i].colors[j]

            couleursAAjouter.innerHTML += 
            ` 
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="${colorName}" value="option2">
                <label class="form-check-label" for="inlineRadio2"> ${colorName}  </label>
            </div>
            `
        }
}


// creation de la classe Article (pour ajout au panier)
class ArticlePAnier{
    constructor(i, couleur, quantite){
        this.i = i
        this.couleur = couleur 
        this.quantite = quantite
    }
}

function GetArticleforBasket(articles){

const monBouton = document.querySelector("button")




// recupérer les Quantités, couleur et Article en question
let TheArticle = articles[i].name
console.log(TheArticle)
// recupération de la couleur 
let couleurChoisie = document.getElementsByClassName("form-check-input")
const couleur = function(){
    for(p=0 ; p < couleurChoisie.length ; p++)
    if(couleurChoisie[p].checked == false){
        return couleurChoisie[p].id
    }
}

    let nouvelArticle = new ArticlePAnier(2, "beige", 2)

}

