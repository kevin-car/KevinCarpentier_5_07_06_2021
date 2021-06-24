

// On recupère l'endroit où est renseigné le code postal 
CodePostal = document.querySelector("#clientCodePostal")
CodePostal.addEventListener('input', function(){
    // console.log(url) ok
    if (this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom&format=json&geometry=centre`
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // console.log(data.length) ok 
            for(i=0; i<data.length; i++){ //ok 
                blocVille = document.querySelector(".blocSelecteur__selectionVille")
                nouvelleVille = document.createElement("option")
                nouvelleVille.setAttribute("value", "ok")
                nouvelleVille.innerText = data[i].nom
                blocVille.appendChild(nouvelleVille)
            }
        })
    }
})