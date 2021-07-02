// Tous les boutons sont dans une liste NodeList --> 
listeDesBoutons = document.querySelectorAll(".close")

// boucle qui impose de regarder tous les éléments 
function recupASupprimer(){
    for (i = 0; i < listeDesBoutons.length; i++) {
        listeDesBoutons[i].addEventListener('click', function(e){
        // Définir l'attribut à supprimer 
        const aSupprimer = this.getAttribute('namecolor')
            coeurTableau = document.querySelectorAll('.coeurTableau tr')
            // on parcours le tableau des nounours
            for(j=0 ; j<coeurTableau.length ; j++){
                // On compare l'ID du bouton en parcours les ID des nounours présent dans le panier
               if(coeurTableau[j].getAttribute('name-color') == aSupprimer ){
                    // 1/ On récupère le local storage
                    mylocalStorageparse = JSON.parse(localStorage.panier)
                    // on supprime l'élément concerné
                    mylocalStorageparse.splice(j, 1)
                    mylocalStorageStringify = JSON.stringify(mylocalStorageparse)
                    // On revoie le panier sans l'élément supprimé
                    localStorage.setItem('panier', mylocalStorageStringify)
                    // on raffrachit la page
                    window.location.reload()
                }
            }
    })
    }
}
recupASupprimer()
