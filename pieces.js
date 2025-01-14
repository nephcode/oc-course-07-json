// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

/// ordonne ce code 

for (let idArticle = 0; idArticle < pieces.length; idArticle++) {
  const article = pieces[idArticle];
  const sectionFiches = document.querySelector(".fiches");
  const articleElement = document.createElement("article");
  
  const imageElement = document.createElement("img");
  imageElement.src = pieces[idArticle].image;
  const nomElement = document.createElement("h2");
  nomElement.innerText = article.nom;
  const prixElement = document.createElement("p");
  //prixElement.innerText = `Prix: ${article.prix} €`;
  prixElement.innerText = `Prix: ${article.prix} € (${
    article.prix < 35 ? "€" : "€€€"
  })`;
  const categorieElement = document.createElement("p");
  //categorieElement.innerText = article.categorie;
  categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
  const descriptionElement = document.createElement("p");
 //categorieElement.innerText = article.categorie;
  descriptionElement.innerText =
    article.description ?? "(Pas de description pour le moment maggle)";

 
  //const sectionFiches = document.querySelector(".fiches");
  
  sectionFiches.appendChild(articleElement);
  articleElement.appendChild(imageElement);
  articleElement.appendChild(nomElement);
  articleElement.appendChild(prixElement);
  articleElement.appendChild(categorieElement);
  articleElement.appendChild(descriptionElement);
}

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", ()=> {
    pieces.sort((a, b) => {
        return a.prix - b.prix;
    });
    console.log(pieces);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", () => {
   const piecesFiltrees = pieces.filter(piece => piece.prix <= 35);
  console.log(piecesFiltrees);
});

const noms = pieces.map(pieceMap => pieceMap.nom);
console.log(noms);

