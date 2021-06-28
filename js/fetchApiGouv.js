

// On recupère l'endroit où est renseigné le code postal 
CodePostal = document.querySelector("#clientCodePostal")
CodePostal.addEventListener('mousemove' , function(){
    // console.log(url) ok
    if (this.value.length == 5){
        let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}&fields=nom&format=json&geometry=centre`
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            // Effacer les Villes d'un éventuel précédent code postal renseigné par l'utilisateur
            blocVille = document.querySelector(".blocSelecteur__selectionVille")
            while(blocVille.firstChild){
                blocVille.removeChild(blocVille.firstChild);
            }
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