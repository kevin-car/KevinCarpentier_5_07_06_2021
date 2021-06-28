// Fonction Principale 
Main()
async function Main() {
    const articles = await getArticle()
    const afficherArticle = displayArticle(articles)
}

// fonction qui rapporte l'élement Article
function getArticle() {
    return fetch("http://localhost:3000/api/teddies")
        .then(function (response) {
            return response.json()
        })
        .then(function (articles) {
            // return article
            return (articles)
        })
        .catch(function (error) {
            console.log(error, "erreur du get article")
        })
}

function displayArticle(articles) {

    for (let i = 0; i < articles.length; i++) {

        // je créé les petits enfants ==> balises images et bouton 
        let myImage = document.createElement("img")
        myImage.classList.add("blocArticles__blocArticle__image--myPhoto")
        myImage.setAttribute("src", articles[i].imageUrl)

        let myBtn = document.createElement("a")
        myBtn.innerText = "Regarder cet article"
        myBtn.classList.add("blocArticles__blocArticle__bouton--myBouton")
        myBtn.classList.add("btn")
        myBtn.classList.add("btn-success")
        myBtn.setAttribute("data-id", articles[i]._id)
        myBtn.setAttribute("href", "./Public/pageProduit.html?data-id=" + articles[i]._id)

        // je créé les petits-enfants
        let blocImage = document.createElement("div")
        let blocBouton = document.createElement("div")

        // je créé les blocs images et boutons
        blocImage.appendChild(myImage)
        blocImage.classList.add("blocArticles__blocArticle__image")
        blocBouton.appendChild(myBtn)
        blocBouton.classList.add("blocArticles__blocArticle__bouton")

        // je créé les sous-bloc (photo, nom, prix...)
        let newName = document.createElement("div")
        newName.classList.add("blocArticles__blocArticle--name")
        newName.innerHTML = articles[i].name
        let newPrice = document.createElement("div")
        newPrice.classList.add("blocArticles__blocArticle--price")
        newPrice.innerHTML = articles[i].price / 100 + "€"

        // je créé mon nouvel article
        let newArticle = document.createElement("div")

        // J'ajoute tous les éléments sous-blocs
        newArticle.appendChild(newName)
        newArticle.appendChild(newPrice)
        newArticle.appendChild(blocImage)
        newArticle.appendChild(blocBouton)

        // on créé l'élément parentBloc pour chaque Article
        const blocArticles = document.querySelector(".blocArticles")
        newArticle.classList.add("blocArticles__blocArticle")
        let unArticle = document.createElement("div")
        unArticle.classList.add("blocArticles__blocArticle")

        // On ajoute tout le bloc du nouvel article
        blocArticles.appendChild(newArticle)
    }
}
const boutoncliquer = document.getElementsByClassName("blocArticles__blocArticle__bouton--myBouton")