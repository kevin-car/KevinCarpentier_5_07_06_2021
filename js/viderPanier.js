// Le bouton 
boutonViderPanier = document.querySelector(".viderLePanier")

boutonViderPanier.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})

