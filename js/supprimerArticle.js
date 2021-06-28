var mylocalStorage = localStorage.panier
var mylocalStorageparse = JSON.parse(mylocalStorage)


listeDesBoutons = document.querySelectorAll(".close")

// boucle qui impose de regarder tous les éléments 
function recupASupprimer(){
    for (i = 0; i < listeDesBoutons.length; i++) {
        listeDesBoutons[i].addEventListener('click', function(e){
            // Définir l'attribut à supprimer 
        const aSupprimer = this.getAttribute('namecolor')
    
    
            coeurTableau = document.querySelectorAll('.coeurTableau tr')
            
    })
    }
}

aSupprimer = recupASupprimer()


console.log(aSupprimer)

// coeurTableau = document.querySelectorAll(".coeurTableau tr")
// console.log(coeurTableau[0].getAttribute('name-color'))


// listeDesBoutons.addEventListener('click', function(e){
//     console.log(e)

// })