// BOUTON VIDER LE PANIER 

boutonViderPanier = document.querySelector(".viderLePanier")

boutonViderPanier.addEventListener('click', function viderPanier(){
    localStorage.clear()
    location.reload()
})