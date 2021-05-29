let structureProduits = "";
// fonction qui va afficher les produits dans la page web automatiquement
  
function affichageProduits(response){
    
    const element1 = document.querySelector(".produits");
    // for pour afficher pours tout les élements
    // mettre les données dans les variables
    for (let i=0; i < response.length; i++){
        structureProduits = structureProduits +  `
        <a href="">
            <div class="mise-en-page-produits>
                <div class="image-smoothie">
                    <img src="${(response[i].img_src)}">
                </div>

                <div class="produits">
                    <ul>
                        <li>${response[i].nom}</li>
                        <li>${response[i].description}</li>
                        <li>${response[i].unit_price}€</li>
                    </ul>
                    <button id="button" onclick=ajout_au_panier(${i})>Ajouter au panier</button> 
                </div>
            </div>
        </a>`;
        // Ajout de l'HTML
        element1.innerHTML = structureProduits;
    }     
}

        // La fonction est applée puis la page est chargé

// window.onload = () => {
//     affichageProduits(response);
//  };
    //    Ajout du produit au panier
function ajout_au_panier(indice_produit){
    var produitEnlocalStorage = JSON.parse(localStorage.getItem("produit"));
    if (produitEnlocalStorage == null) {
        produitEnlocalStorage = [response[indice_produit]];
        localStorage.setItem("somme", JSON.stringify(response[indice_produit].unit_price));
    }else {
        produitEnlocalStorage.push(response[indice_produit]);
        var somme = parseInt(localStorage.getItem("somme"), 10);
        localStorage.setItem("somme", somme + response[indice_produit].unit_price);
    }
    localStorage.setItem("produit", JSON.stringify(produitEnlocalStorage));
}
