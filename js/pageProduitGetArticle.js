
// fonction permettant d'obtenir un paramètre url
function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}

// Obtenir le Data-Id de l'URL
const dataID = $_GET('data-id')

let article = {
    exemple: "exemple ok",
}

// Fonction Principale 
Main()
async function Main() {
    const myarticles = await getArticle()
    displayElements(myarticles)
}

// Ma fetch principale, recupération brut des Articles de l'API 
function getArticle() {
    return fetch("http://localhost:3000/api/teddies/" + dataID)
        .then(function (response) {
            return response.json()
        })
        .then(function (myarticles) {
            return (myarticles)
        })
        .catch(function (error) {
            console.log("erreur du get article")
        })
}

// Modifier les Elements 
function displayElements(myarticles) {
    // Image
    let imageAModifier = document.querySelector(".photoArticle img")
    imageAModifier.setAttribute("src", myarticles.imageUrl)
    imageAModifier.setAttribute("alt", "00")
    // Texte 
    let nomAModifier = document.querySelector(".blocDescription--nomProduit")
    nomAModifier.innerHTML = myarticles.name
    // description
    let description = document.querySelector(".blocDescription--description")
    description.innerHTML = myarticles.description
    // Prix
    let prixAModifier = document.querySelector(".blocQuantite__prix")
    prixAModifier.innerHTML = "Prix unitaire : <strong>" + myarticles.price / 100 + "</strong> €"
    // Titre 
    let titreAModifier = document.querySelector("title")
    titreAModifier.innerHTML = "Orinoco : " + myarticles.name

    let couleursAAjouter = document.querySelector(".blocSelecteur__selectionCouleur")
    console.log(couleursAAjouter)

    for (j = 0; j < myarticles.colors.length; j++) {
        let colorName = myarticles.colors[j]
        couleursAAjouter.innerHTML +=
        ` 
        <option class="option" value=${colorName} >${colorName}</option>
        `
    }
}




