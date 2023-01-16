import { porscheImage as porscheImageElement } from './section2.js';
import { preloadImage } from './360imagesLoad.js';

var lastAnimationFrame = 0; // variable qui contiendra le dernier index d'animation 



var currentStep = 0; 


/** 
         * Fonction qui permet l'animation du véhicule
         * @param {number} startStep - index de départ de l'animation
         * @param {number} endStep - index de fin de l'animation
         * @param {number} speed - vitesse de l'animation (délais en ms entre chaque image)
        */
export function animateVehicle(startStep, endStep, speed) {

    var currentStep = startStep;

    // Boucle de l'animation
    var anim = setInterval(function () {
        changeFrameImage(currentStep);
        currentStep++;

        if (currentStep == 73) { // retour au début de l'animation
            currentStep = 1;
        }

        // Si l'index actuel avaut l'index de fin, on arrête l'animation
        if (currentStep == endStep) {
            lastAnimationFrame = currentStep;
            clearInterval(anim);
            console.info("Dernier index d'animation: " + lastAnimationFrame);
        }
    }, speed);
};


/**
 * Fonction qui affiche l'image correspondant à l'index
 * On récupère l'image sur le site de Porsche, et on l'affiche selon la direction du mouvement
 * @param {number} index 
 */
export function changeFrameImage(index) {

    // si l'index est inférieur à 10, on ajoute un 0 devant
    if (index < 10) {
        index = "0" + index;
    }

    // l'url de l'image est l'url de base + le numéro de l'image
    // var poscheImageSCR = "https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-panamera-st-360-exterior-0" + index + "/normal/a8e1e0f2-1d2f-11eb-80cf-005056bbdc38;sJ;twebp065/porsche-normal.webp";
    var poscheImageSCR = "https://files.porsche.com/filestore/image/multimedia/none/modelseries-911gt3-rs-360-exterior-0" + index + "/normal/709a3fe4-0da5-11ed-80f5-005056bbdc38;sJ;twebp/porsche-normal.webp";

    // console.log("url construite : " + poscheImageSCR + " index : " + index);

    porscheImageElement.src = poscheImageSCR;
}