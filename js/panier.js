// Déclaration d'une variable dans le local storage

let ProduitPresentDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"))
console.log(ProduitPresentDansLeLocalStorage);


//*****************   Affichage des produits du panier   ****************************

const elemnt2 = document.querySelector("#container-produits-panier");
console.log(elemnt2);

// si le panier est vide : afficher le panier est vide
if (ProduitPresentDansLeLocalStorage === null || ProduitPresentDansLeLocalStorage == 0){
const paniervide = `
    <div class="container-panier-vide">
        <div> Le panier est vide </div>
    </div>
`;
    elemnt2.innerHTML = paniervide;
} else {
    // si le panier est pas vide
    let structureProduitPanier = [];

    for(k = 0;k < ProduitPresentDansLeLocalStorage.length;k++ ){
        console.log("il y'a " + ProduitPresentDansLeLocalStorage.length + " elements")
        structureProduitPanier = structureProduitPanier + `
        <div class"container-récapitulatif">
            <div>${ProduitPresentDansLeLocalStorage[k].nom}   
            <div>Prix: ${ProduitPresentDansLeLocalStorage[k].unit_price} 
            <button id="${k}"class="btn-supprimer" onclick="SuprimmerProduit(this.id)" >Supprimer l'article</div>
        </div>`};
    
        if (k == ProduitPresentDansLeLocalStorage.length){
            elemnt2.innerHTML = structureProduitPanier; 
        }    
}
// *****************SUPPRESSION********************

// selection des references de tous les boutons btn-supprimer
let btn_supprimer = document.querySelectorAll(".btn-supprimer");
console.log(btn_supprimer);


// Fonction de suppression
function SuprimmerProduit(indiceProduitSupprimer){
    ProduitPresentDansLeLocalStorage = JSON.parse(localStorage.getItem("produit"))
    const index_of_element_to_delete = parseInt(indiceProduitSupprimer, 10);
    var somme = parseInt(localStorage.getItem("somme"), 10) - ProduitPresentDansLeLocalStorage[index_of_element_to_delete].unit_price;
    localStorage.setItem("somme", somme);
    // le splice fonction pas avec l'indice 0
    if (indiceProduitSupprimer == 0){
        ProduitPresentDansLeLocalStorage.shift()
     }else {
        ProduitPresentDansLeLocalStorage.splice(index_of_element_to_delete,index_of_element_to_delete);
     }
    localStorage.setItem("produit", JSON.stringify(ProduitPresentDansLeLocalStorage));
    window.location.href="panier.html";
} 

// ********************LE MONTANT TOTAL***************************
// Déclaration de la variable pour pouvoir y mettre les prix qui sont présent dans le panier

var somme = localStorage.getItem("somme");
if (somme == null) {
    somme = 0;
}
console.log(" Somme: "+ somme);

// Affichage de la somme
const affichageprixhtml = `
<div class="affichage-prix-html"> Le prix total à payer: ${somme} €</div>  
 `
elemnt2.insertAdjacentHTML("beforeend",affichageprixhtml);


// Formulaire de commande
const afficheformulaire = () => {
    const elemnt3 = document.querySelector("#container-produits-panier");

    const structureformulaire = `
        <div id="formulaire">
           <h2>Remplissez le formulaire pour valider la commande:</h2> 
    
            <form>
                <label for="prenom">Prénom :</label>
                <input type="texte" id="prenom" name="prenom" required> 

                <label for="Nom">Nom :</label>
                <input type="texte" id="Nom" name="prenom" required> 

                <label for="adresse">adresse :</label>
                <input type="texte" id="adresse" name="prenom" required> 

                <label for="code postal">code postal :</label>
                <input type="texte" id="code postal" name="prenom" required> 

                <label for="n° bancaire">n° bancaire :</label>
                <input type="texte" id="n° bancaire" name="prenom" required> 
            
                <button id="envoyerFormulaire"
                type="submit"
                name="envoyerFormulaire">confirmer</button>;
            </form>
         </div>`;
        // Ajout de l'html
    elemnt3.insertAdjacentHTML("afterend", structureformulaire);
}; 


//Affichage du formulaire
afficheformulaire();  


// selection du bouton envoyer
const btnenvoyer = document.querySelector("#envoyerFormulaire");


// Valider la commande
btnenvoyer.addEventListener("click",()=>{
    // recup des valeurs et les mettre dans le local storage
    localStorage.setItem("prenom",document.querySelector("#prenom").value);    
    console.log(document.querySelector("#prenom").value);
    localStorage.setItem("nom",document.querySelector("#nom").value);    
    console.log(document.querySelector("#nom").value);
    localStorage.setItem("adresse",document.querySelector("#adresse").value);    
    console.log(document.querySelector("#adresse").value);
    localStorage.setItem("code postal",document.querySelector("#code postal").value);    
    console.log(document.querySelector("#code postal").value);
    localStorage.setItem("num bancaire",document.querySelector("#num bancaire").value);    
    console.log(document.querySelector("#num bancaire").value);
});






