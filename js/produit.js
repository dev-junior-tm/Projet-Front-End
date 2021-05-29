// // // récupereration de la chaine de requete dans l'url
// const querystring_url_id = window.location.search;
// console.log(querystring_url_id)
// const urlsearchParams = new URLSearchParams(querystring_url_id);
// // console.log(urlsearchParams);

// const le_id = urlsearchParams.get("id");
// // console.log(le_id);

// // affichage du produit qui a été séléctionné par l'id
// // console.log(response);

// const idProduitSelectionner = response.find((element) => element.id === le_id);
// // console.log(idProduitSelectionner);

// // selection de la classe ou je vais ajouer de l'html
// const positionElement2 = document.querySelector(".container-page-produits");
// // console.log(positionElement2);

// // la structure html pour l'affichage
// const structureProduit2 = `
//     <div class="mise-en-page-produit">
    
//         <div class="produit_photo">
//             <img src="${idProduitSelectionner.img_src}"/>
//         </div>

//         <div class="produit">
//             <ul>
//                 <li>name:<span>${idProduitSelectionner.nom}</span></li>
//                 <li>description:<span>${idProduitSelectionner.description}</span></li>
//                 <li>unit_price:<span>${idProduitSelectionner.unit_price}</span></li>
//             </ul>
//             <div class="option_produit_mise_en_page">
//                 <form>
//                 <label for ="option_produit">Choisir l'option:</label>
//                     <select id="option_produit" name="option_produit"></select>
//             </div>
//             <button id="bouton_envoyer" type="submit">Ajouter au Panier</button> 
//                 </form>
            
//         </div>
//     </div>
// `;
// const optionQuantite = idProduitSelectionner.quantités;
// let structurequantités = [];


// for (let j=0; j< optionQuantite.length; j++ ){
//     structurequantités = structurequantités + `
//     <option value="${j+1}">${optionQuantite[j]}</option>
//     `;
// }


// //  injection html
// positionElement2.innerHTML = structureProduit2;

// // injection de html dans la page produit pour l'ajout des quantités)
// const positionElement3 = document.querySelector("#option_produit")
// positionElement3.innerHTML = structurequantités;
// console.log(positionElement3);
// // *************************Gestionnaire du panier
// // récuperation des élemts selectionnées

// // selection id du formulaire
// const idForm = document.querySelector("#option_produit");

// // sélectionner du bouton AJOUTER l'article au panier

// const bouton_Panier = document.querySelector("#bouton_envoyer")
// // console.log(bouton_Panier);
// // envoyer le panier
// bouton_Panier.addEventListener("click", (event)=>{
//     event.preventDefault();


//     // Mettre le choix de l'utilisateur dans une variable
// //  const choixFormulaire = idForm.value;
// //  console.log(choixFormulaire);
// //     // récuperer les valeurs du formulaire
// //     let quantitésProduit = {
// //         nom: idProduitSelectionner.nom, 
// //         id_ProduitSelectionner : idProduitSelectionner.id,
// //         option_Produit : choixFormulaire,
// //         prix: idProduitSelectionner.unit_price,
// //     };
// // console.log(quantitésProduit);

// // **********************local storage
// // declaration d'une variable dans le local storage
// // json.parse pour convertir les données du format json en obj js
// // let produitEnregistrerDansLocalStorage = JSON.parse(localStorage.getItem("produit"))
// // fonction fenetre pop up
// // const popupConfirmation =() =>{
// //     if (window.confirm(`${idProduitSelectionner.nom} option:${choixFormulaire} a bien été ajouter au panier consulyter le panier avec ok et revenir à l'accueil avec annuleer`))
// // {
// //    window.location.href = "panier.html";}
// //    else{
// //     window.location.href = "index.html";
// //    } 
// // }
// // // fonction ajouter prod au local Storage
// // const ajoutProduitLocalStorage = () => {
// //     // ajout dans le tableau de l'objet avec les values du choix de l'utilisateur
// //     produitEnregistrerDansLocalStorage.push(quantitésProduit);
// //     localStorage.setItem("produit", JSON.stringify(produitEnregistrerDansLocalStorage));
// // }
// // if(produitEnregistrerDansLocalStorage){
// //     ajoutProduitLocalStorage();
// //     popupConfirmation();
// // }
// // else{
// //     produitEnregistrerDansLocalStorage = [];
// //     ajoutProduitLocalStorage();
// //     popupConfirmation();
// // }   



// // // s'il y'a des produits enregistré dans le local storage
// // if(produitEnregistrerDansLocalStorage){
// //     produitEnregistrerDansLocalStorage.push(quantitésProduit);
// //     localStorage.setItem("produit",JSON.stringify(produitEnregistrerDansLocalStorage));
// //     console.log(produitEnregistrerDansLocalStorage);
// //     popupConfirmation();
// // }


// // // s'il y'a pas des produits enregistré dans le local storage
// // else{
// //     produitEnregistrerDansLocalStorage = [];
// //     produitEnregistrerDansLocalStorage.push(quantitésProduit)
// //     localStorage.setItem("produit",JSON.stringify(produitEnregistrerDansLocalStorage));
// //     console.log(produitEnregistrerDansLocalStorage);
// //     popupConfirmation();
// // }


// // });
