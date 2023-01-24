/**
 * Dans l'ordre chronologique de découverte du site :
 * 
 * - Affichage du message de chargement, avec le logo
 * - Une fois le chargement terminé, on le retire et on anime les volets
 * - Lorsque les volets sont fermés, on les supprime et affiche le titre principal
 * 
 * - Les animations globales du site sont donc lancées  
 */


// window.addEventListener("load", startExperience()); // déclencheur de la page

readyDisplayContent = false;

/**
 * Fonction appelée lorsque le loader est prêt à être affiché
 */
function startExperience() {
    console.info("website : startExperience");

    // affichage du loader
    displayLoader();
}

/**
 * Fonction qui affiche le loader
 */
function displayLoader() {
    var loader = document.getElementById("website-loader");
    loader.style.display = "block";

    // On attends le chargement complet de la page, avant de lancer le reste des animations
    window.addEventListener("load", loadWebsiteContent());

}

/**
 * Fonction qui masque le loader
 */
function hiddeLoader() {
    var loader = document.getElementById("website-loader");
    loader.style.display = "none";
}

/**
 * Fonction qui affiche le contenu de la page
 * 
 * - On cache le loader
 * - On affiche le contenu de la page
 * - On lance les animations
 * 
 */
function loadWebsiteContent() {

    console.info("tout le contenu est chargé");

    // On cache le loader, après 1 seconde
    setTimeout(hiddeLoader, 1000);


    // Affiche le contenu de la page
    document.getElementById("website-content").style.display = "block";

    // Prépare l'effet de perspective sur l'image de fond
    var image = document.getElementById("background-image");
    var overlay = document.getElementById("image-background-overlay");

    overlay.addEventListener("mousemove", changePerspective); // gestion des évènements à la souris
    overlay.addEventListener("mouseleave", resetPerspective);

    /**
     * Fonction permettant de changer la perspective de l'image de fond, 
     * en fonction de la position de la souris
     * @param {number} event 
     */
    function changePerspective(event) {
        var x = event.clientX;
        var y = event.clientY;

        var transformX = (x / window.innerWidth * 5) - 2.5;
        var transformY = (y / window.innerHeight * 5) - 2.5;

        image.style.transform = "perspective(2000px) rotateX(" + transformY + "deg) rotateY(" + transformX + "deg)";
    }

    /**
     * Permet de remettre à zéro la perspective de l'image de fond
     */
    function resetPerspective() {
        image.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
        image.style.transition = "all ease 0.2s";
    }


    /*
    *   Affiche le titre principal lettre par lettre
    */
    function letterAnimation() {

        var index = 0;
        textAfficher = "911 GT3 RS";

        var title = document.getElementById("main-title");

        boucle = setInterval(function () {

            var span = document.createElement("span");
            span.textContent = textAfficher[index];

            title.appendChild(span);

            span.id = index;
            var monspan = document.getElementById(index);
            monspan.classList.add("car-title");

            index++;

            // console.log(index);

            if (index > 15) {
                clearInterval(boucle);
            }

        }, 100);
    }


    /**
     * Affichage des volets de la page
     * Fonction qui cible les volets, et qui les supprime une fois l'animation terminée
     * Une fois chaque volet supprimé, on supprime le conteneur des volets
     */

    // importe la fonction animeShutter depuis shutterAnimation.js
    // import { animeShutter } from "./shutterAnimation.js";

    var leftShutter = document.querySelector(".left");
    var rightShutter = document.querySelector(".right");
    var middleShutter = document.querySelector(".middle");

    var shutterCount = 0; // statement pour vérifier si les 3 volets sont fermés

    leftShutter.addEventListener("animationend", function () {
        leftShutter.parentNode.removeChild(leftShutter);
        shutterCount++;
        console.log(shutterCount);
    });

    middleShutter.addEventListener("animationend", function () {
        middleShutter.parentNode.removeChild(middleShutter);
        shutterCount++;
        console.log(shutterCount);
    });

    rightShutter.addEventListener("animationend", function () {
        rightShutter.parentNode.removeChild(rightShutter);
        shutterCount++;
        console.log(shutterCount);
        shutterCheck();
    });

    /**
     * Fonction qui vérifie si les 3 volets sont fermés
     */
    function shutterCheck() {
        console.log("shutterCheck");
        if (shutterCount === 3) {
            console.log("ok");
            var shutter = document.getElementById("shutter");
            shutter.parentNode.removeChild(shutter);

            // on lance l'animation des lettres
            loadWelcomeAnimations()
        }
    }

    /** 
     * Fonction lancée après le chargement du contenu de la page
    */
    function loadWelcomeAnimations() {
        letterAnimation();
        // on ajout l'animation à l'image
        image.classList.add("image-animation");
    }

    // animeShutter();
}
