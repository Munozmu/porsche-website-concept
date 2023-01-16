// Construction du tableau d'image
var images = [];
for (var i = 1; i < 73; i++) {
    // si l'index est inférieur à 10, on ajoute un 0 devant
    if (i < 10) {
        i = "0" + i;
    }
    // images.push("https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-panamera-st-360-exterior-0" + i + "/normal/a8e1e0f2-1d2f-11eb-80cf-005056bbdc38;sJ;twebp065/porsche-normal.webp");
    // images.push("https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-panamera-st-360-exterior-0" + i + "/normal/a8e1e0f2-1d2f-11eb-80cf-005056bbdc38;sJ;twebp065/porsche-normal.webp");
    images.push("https://files.porsche.com/filestore/image/multimedia/none/modelseries-911gt3-rs-360-exterior-0" + i + "/normal/709a3fe4-0da5-11ed-80f5-005056bbdc38;sJ;twebp/porsche-normal.webp")
}



/**
 * Fonction qui précharge une image
 * elle renvoie une promesse qui sera résolue si l'image est chargée
 *
 * @param {string} url
 * @returns {Promise}
 */
export var preloadImage = function (url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.src = url;
        image.onload = function () {
            console.log("Image Loaded: " + url);
            resolve();
        }
        image.onerror = function () {
            console.log("Image Failed: " + url);
            reject();
        }
    });
};

/**
 * Fonction qui précharge un tableau d'images
 * elle renvoie une promesse qui sera résolue si toutes les images sont chargées
 *
 * @param {array} imagesUrls
 * @returns {Promise}
 */
var preloadImages = function (imageimagesUrls) {
    var promises = [];
    for (var i = 0; i < images.length; i++) {
        promises.push(preloadImage(images[i]));
    }
    return Promise.all(promises);
};

// on précharge les images
// si elles sont toutes chargées, on active le bouton
preloadImages(images).then(function () {
    console.log("All images are loaded");
    // console.info("Lancement de l'animation");
    document.getElementById("button-lauch-animation").disabled = false;
    // lancerAnimation360();
}).catch(function (error) {
    console.log("Error loading images:", error);
});