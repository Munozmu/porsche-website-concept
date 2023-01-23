import { datas } from "./chapters.js";

console.log(datas);

// récupération des éléments du DOM
// menu
const menuPreviousChapter = document.getElementById('menu-previous-chapter');
const menuCurrentChapter = document.getElementById('menu-current-chapter');
const menuNextChapter = document.getElementById('menu-next-chapter');

// chapitre
const chapterTitle = document.getElementById('chapter-title');
const chapterDescription = document.getElementById('chapter-description');

// histoire actuelle
const storieTitle = document.getElementById('current-storie-title');
const storieDescription = document.getElementById('current-storie-description');
const storieImage = document.getElementById('current-storie-img-path');

// prochaines histoires teaser
const nextStorieTitle = document.getElementById('next-storie-title');
const nextStorieImgPath = document.getElementById('next-storie-img-path');
const lastStorieTitle = document.getElementById('last-storie-title');
const lastStorieImgPath = document.getElementById('last-storie-img-path');

// changement des valeurs correspondantes au chapitre en cours
let selectedchapterID = 0;
var storieID = 0;


/**
 * Fonction permettant d'afficher les données à l'écran,
 * correspondant au chapitre et à l'histoire en cours.
 * @param {*} chapterID 
 * @param {*} storieID 
*/
const loadDatas = (chapterID, storieID) => {

    // cas d'erreur 
    if (chapterID < 0 || chapterID > datas.length - 1) {
        throw new Error("Le chapitre n'existe pas.");
    }

    console.info("Chapitre actuel : " + chapterID);    

    if (chapterID === 0) {
        menuPreviousChapter.innerHTML = "";
        menuCurrentChapter.innerHTML = datas[chapterID].subject
        menuNextChapter.innerHTML = datas[chapterID + 1].subject;
    }
    else if ((chapterID >= datas.length - 1)) {
        menuPreviousChapter.innerHTML = datas[2].subject;
        menuCurrentChapter.innerHTML = datas[3].subject
        menuNextChapter.innerHTML = "";
    }
    else {
        menuPreviousChapter.innerHTML = datas[chapterID - 1].subject;
        menuCurrentChapter.innerHTML = datas[chapterID].subject
        menuNextChapter.innerHTML = datas[chapterID + 1].subject;
    }


    chapterTitle.innerHTML = datas[chapterID].title;
    chapterDescription.innerHTML = datas[chapterID].description;

    storieTitle.innerHTML = datas[chapterID].stories[storieID].title;
    storieDescription.innerHTML = datas[chapterID].stories[storieID].description;

    nextStorieTitle.innerHTML = datas[chapterID].stories[storieID + 1].title;
    nextStorieImgPath.style.backgroundImage = "url(" + datas[chapterID].stories[storieID + 1].imgPath + ")";
    lastStorieTitle.innerHTML = datas[chapterID].stories[storieID + 2].title;

    // on change le background-image de lastStorieImgPath
    lastStorieImgPath.style.backgroundImage = "url(" + datas[chapterID].stories[storieID + 2].imgPath + ")";

    storieImage.src = datas[chapterID].stories[storieID].imgPath;
}



/**
 * Fonction permettant d'afficher les données à l'écran,
 * correspondant au chapitre et à l'histoire en cours.
 * Avec les animations.
 * 
 * Fait appel à la fonction loadDatas() pour afficher les données.
 * @param {*} chapterID 
 * @param {*} storieID 
 */
const displayDatas = (chapterID, storieID) => {

    
    // animation des infos du chapitre
    chapterTitle.style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
    chapterDescription.style.animation = "fadeIn 2s ease-in-out 0s 1 normal forwards";
    
    storieTitle.style.animation = "fadeInUpSmooth 1s ease-in-out 0s 1 normal forwards";
    storieDescription.style.animation = "fadeInRight 1s ease-in-out 0s 1 normal forwards";
    storieImage.style.animation = "clipTop 1s ease-in-out 0s 1 normal forwards";
    
    // affichage des prochains chapitres dans le menu latéral
    nextStorieTitle.style.animation = "fadeInLeft 2s ease-out 0s 1 normal forwards";
    nextStorieImgPath.style.animation = "clipTop 2s ease-out 0s 1 normal forwards";
    
    lastStorieTitle.style.animation = "fadeInLeft 2s ease-out 0s 1 normal forwards";
    lastStorieImgPath.style.animation = "clipTop 2s ease-out 0s 1 normal forwards";
    
    try {
        loadDatas(chapterID, storieID);
    }
    catch (error) {
        console.error("Erreur dans l'affichage des données du chapitre : ", error);
    }
    

    console.info("Les données sont affichées.");
}

const hiddedatas = (chapterID, storieID) => {

    console.info("Les données sont masquées.");

    // animation des infos du chapitre
    chapterTitle.style.animation = "fadeOut 1s ease-in 0s 1 normal forwards";
    chapterDescription.style.animation = "fadeOut 1s ease-in-out 0s 1 normal forwards";

    storieTitle.style.animation = "fadeOutDownSmooth 1s ease-in-out 0s 1 normal forwards";
    storieDescription.style.animation = "fadeOutRight 1s ease-in-out 0s 1 normal forwards";
    storieImage.style.animation = "clipBottom 1s ease-in-out 0s 1 normal forwards";

    // affichage des prochains chapitres
    nextStorieTitle.style.animation = "fadeOutLeft 1s ease-out 0s 1 normal forwards";
    nextStorieImgPath.style.animation = "clipBottom 1s ease-out 0s 1 normal forwards";

    lastStorieTitle.style.animation = "fadeOutLeft 1s ease-out 0s 1 normal forwards";
    lastStorieImgPath.style.animation = "clipBottom 1s ease-out 0s 1 normal forwards";

    
    loadDatas(chapterID, storieID);

    return true;
}




displayDatas(selectedchapterID, storieID);

const nextChapter = (chapterID, storieID) => {

    // Gestion des erreurs
    if (selectedchapterID > datas.length - 2) {
        return 0;
    }
    else {
        hiddedatas(chapterID, storieID);
        selectedchapterID++;
        setTimeout(() => {
            displayDatas(selectedchapterID, storieID);
        }, 1000);
    }

}

const previousChapter = (chapterID, storieID) => {

    // Gestion des erreurs
    if (selectedchapterID <= 0) {
        return 0;
    }
    else {
        hiddedatas(chapterID, storieID);
        selectedchapterID--;
        setTimeout(() => {
            displayDatas(selectedchapterID, storieID);
        }, 1000);
    }

};


// displayDatas on changeChapter button click
document.getElementById('nextChapter').addEventListener('click', () => {
    console.info(nextChapter(selectedchapterID, storieID));
});
document.getElementById('previousChapter').addEventListener('click', () => {
    console.info(previousChapter(selectedchapterID, storieID));
});