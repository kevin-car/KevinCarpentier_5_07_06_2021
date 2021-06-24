var mylocalStorage = localStorage.panier
console.log(mylocalStorage)
var mylocalStorageparse = JSON.parse(mylocalStorage)
console.log(mylocalStorageparse)

let lesBoutons = document.querySelectorAll(".close")
for(i=0 ; i<lesBoutons.length ; i++){
lesBoutons[i].addEventListener("click", function () {
    let couleur = this.getAttribute("color")
    console.log(couleur)
    let nom = this.getAttribute("id")
    for (i = 0; i < mylocalStorageparse.length; i++) {
        if (mylocalStorageparse[i].couleur == couleur && mylocalStorageparse[i].name == nom) {
            mylocalStorageparse = mylocalStorageparse.slice(i, i)
            mylocalStorageStringify = JSON.stringify(mylocalStorageparse)
            localStorage.setItem("panier", mylocalStorageStringify)
            window.location.reload()
        }
    }
})
}
