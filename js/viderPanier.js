// Le bouton 
boutonViderPanier = document.querySelector(".viderLePanier")
console.log(boutonViderPanier)

boutonViderPanier.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})

