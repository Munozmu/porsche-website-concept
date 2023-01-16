// Construction du tableau d'image
var images = [];
for (var i = 1; i < 73; i++) {
    // si l'index est inférieur à 10, on ajoute un 0 devant
    if (i < 10) {
        i = "0" + i;
    }
    images.push("https://files.porsche.com/filestore/image/multimedia/none/971-g2-2nd-panamera-st-360-exterior-0" + i + "/normal/a8e1e0f2-1d2f-11eb-80cf-005056bbdc38;sJ;twebp065/porsche-normal.webp");
}
