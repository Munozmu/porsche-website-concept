import { animateVehicle } from './360bundle.js';

export const porscheImage = document.getElementById('porsche-image');
export default porscheImage;


// choix de l'index de départ de l'animation (si < 10, ajouter un 0 devant)
var indexAffichageBase = 37;
// if (indexAffichageBase < 10) {
//     indexAffichageBase = "0" + indexAffichageBase;
// }

porscheImage.src = "https://files.porsche.com/filestore/image/multimedia/none/modelseries-911gt3-rs-360-exterior-0" + indexAffichageBase + "/normal/709a3fe4-0da5-11ed-80f5-005056bbdc38;sJ;twebp/porsche-normal.webp";

window.onload = function () {
    debugDisplayAll();
};


const debugDisplayAll = () => {
    const titleSectionElement = document.getElementById('section1-title');
    const titleSectionSpanElements = titleSectionElement.getElementsByTagName('span');

    porscheImage.style.opacity = 1;
    
};

// on écoute le bouton button-lauch-animation au clic
document.getElementById('button-lauch-animation').addEventListener('click', function () {
    animateVehicle(1, 72, 30);
});

document.getElementById('entry-point-button').addEventListener('click', function () {
    entryPointSection();
});

document.getElementById('frameKeypoint1').addEventListener('click', function () {
    frameKeypoint1();
});

// mise en place des délais d'affichage
const delayCarTitle = 300;
const delayShowDescription = 1000;


/** 
 * Appellée lorsque la section recoit un signal de point d'entrée
 * Si un signal est reçu, cela signifie que l'expérience sur cette section peut commencer
*/
const entryPointSection = () => {

    // STEP 1

    const titleSectionElement = document.getElementById('section1-title');
    const titleSectionSpanElements = titleSectionElement.getElementsByTagName('span');

    

    // time line :
    // 0s : apparition de la voiture
    // 3s : apparition du titre (le temps que l'animation de la voiture se termine)
    // 3s : lancement de l'animation (le temps que l'animation de la voiture se termine)
    // 3900ms : apparition de la description (temps animation + 3 * 300ms des car du titre)

    // on laisse apparaitre la voiture avec un fondu d'opacité de 0 à 100 pour porscheImage
    porscheImage.style.animation = 'fadeIn 3s ease-in-out';
    porscheImage.style.opacity = 1;

    // quand animation terminée, on lance l'animation du titre
    porscheImage.addEventListener('animationend', () => {

        // on lance l'animation du frame 37 jursqu'au 7
        animateVehicle(37, 20, 70);
        // animateVehicle(7, 37, 70);

        // on affiche le titre
        for (let i = 0; i < titleSectionSpanElements.length; i++) {
            setTimeout(() => {
                // on ajoute l'animation fadeInUpSmooth
                titleSectionSpanElements[i].style.animation = 'fadeInUpSmooth 1s ease-in-out';
                titleSectionSpanElements[i].style.opacity = 1;
            }, delayCarTitle * i);
        }

        // on affiche la description détaillée de la voiture
        setTimeout(() => {
            document.getElementById('section1-description').style.animation = 'fadeInUpSmooth 1s ease-in-out';
            document.getElementById('section1-description').style.opacity = 1;
        }, delayCarTitle * titleSectionSpanElements.length + delayShowDescription);

    });




    // STEP 2


};

const frameKeypoint1 = () => {
    console.info("Lancement du point clé 1");

    // On masque les titres avec l'ajout de l'animation fadeOutUpSmooth à chaque span du titre
    const titleSectionElement = document.getElementById('section1-title');
    const titleSectionSpanElements = titleSectionElement.getElementsByTagName('span');

    for (let i = 0; i < titleSectionSpanElements.length; i++) {
        setTimeout(() => {
            // nettoyage des styles de l'élément
            titleSectionSpanElements[i].removeAttribute('style');
            // on ajoute l'animation fadeInUpSmooth
            titleSectionSpanElements[i].style.animation = 'fadeOutDownSmooth 2s ease-out';
            titleSectionSpanElements[i].style.opacity = 0;
            // titleSectionSpanElements[i].style.transform = 'translateY(70%)';
        }, delayCarTitle * i);

    }

    // on masque la description avec l'ajout de l'animation fadeOutUpSmooth
    setTimeout(() => {
        document.getElementById('section1-description').removeAttribute('style');
        document.getElementById('section1-description').style.animation = 'fadeOutDownSmooth 2s ease-out';
        document.getElementById('section1-description').style.opacity = 0;
    }, 1000);



    // on lance l'animation du frame 37 jursqu'au 7
    // animateVehicle(37, 43, 70);
    // animateVehicle(7, 37, 70);
};









