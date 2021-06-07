// 

Main()

async function Main() {
    const articles = await getArticle()
    console.log(articles.length)
    for ( i=0; i<articles.length ; i++){
        displayArticle(articles)
    }
}


function getArticle(){
    return fetch("http://localhost:3000/api/teddies")
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


function displayArticle(articles) {
    // Je cible mon template et je le clône
    const templateHTML = document.querySelector(".blocArticles__blocArticle__produit")
    const cloneTemplateHTML = document.importNode(templateHTML.content, true)
    // Je recupère mon clône et je lui affecte les valeurs récupéré dans le json()
    cloneTemplateHTML.querySelector(".blocArticles__blocArticle__produit__article--image").innerHTML = "<img src=" +  articles[i].imageUrl + ">"
    cloneTemplateHTML.querySelector(".blocArticles__blocArticle__produit__article--name").innerHTML = articles[i].name
    cloneTemplateHTML.querySelector(".blocArticles__blocArticle__produit__article--price").innerHTML = articles[i].price + "€"


    // je cible la balise finale et je lui ajoute un enfant avec mes éléments
    document.querySelector(".blocArticles__blocArticle").appendChild(cloneTemplateHTML)
}


//  Fonction d'écoute de l'article cliqué


let template = document.querySelector(".blocArticles__blocArticle__produit")
let templateContent = template.content
