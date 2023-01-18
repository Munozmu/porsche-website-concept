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
var chapterID = 0;
var storieID = 0;




/**
 * Fonction permettant d'afficher les données à l'écran,
 * correspondant au chapitre et à l'histoire en cours.
 * @param {*} chapterID 
 * @param {*} storieID 
*/
const loadDatas = (chapterID, storieID) => {

    if (chapterID === 0) {
        menuCurrentChapter.innerHTML = datas[chapterID].subject
        menuNextChapter.innerHTML = datas[chapterID + 1].subject;
    }
    else if (chapterID === datas.length - 1) {
        menuPreviousChapter.innerHTML = datas[chapterID - 1].subject;
        menuCurrentChapter.innerHTML = datas[chapterID].subject
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
    nextStorieImgPath.src = datas[chapterID].stories[storieID + 1].imgPath;
    lastStorieTitle.innerHTML = datas[chapterID].stories[storieID + 2].title;
    lastStorieImgPath.src = datas[chapterID].stories[storieID + 2].imgPath;
}




const displayDatas = () => {

    // animation des infos du chapitre
    chapterTitle.style.animation = "fadeIn 2s ease-in 0s 1 normal forwards";
    chapterDescription.style.animation = "fadeIn 2s ease-in-out 0s 1 normal forwards";

    storieTitle.style.animation = "fadeInUpSmooth 1s ease-in-out 0s 1 normal forwards";
    storieDescription.style.animation = "fadeInRight 1s ease-in-out 0s 1 normal forwards";
    storieImage.style.animation = "clipTop 1s ease-in-out 0s 1 normal forwards";

    // affichage des prochains chapitres
    nextStorieTitle.style.animation = "fadeInLeft 3s ease-out 0s 1 normal forwards";
    nextStorieImgPath.style.animation = "clipTop 3s ease-out 0s 1 normal forwards";

    lastStorieTitle.style.animation = "fadeInLeft 3s ease-out 0s 1 normal forwards";
    lastStorieImgPath.style.animation = "clipTop 3s ease-out 0s 1 normal forwards";

    loadDatas(chapterID, storieID);
}




displayDatas();