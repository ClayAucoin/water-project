
var getLang = new URLSearchParams(window.location.search);
var language = getLang.get('lang');

if(language == "es"){
    document.getElementById("title").innerHTML = "Consejos de Conservación<br>del Agua";
`    document.getElementById("subTitle").innerHTML = "En lugar de comprar botellas de agua desechables, usa una botella reutilizable. Las botellas de un solo uso llenan los vertederos y desperdician agua valiosa.";
    document.getElementById("instruction").innerHTML = "Elige la botella de agua correcta.<br>Luego, haz clic en el grifo para llenarla.";
    document.getElementById("nextButton").setAttribute("href", "shower-screen.html?lang=es");
`}



document.getElementById("plastic-bottle").addEventListener("click", () => {
    document.getElementById("ban").style.opacity = "1";
    document.getElementById("glass-bottle").style.opacity = "1";
    document.getElementById("bottle-under-faucet").style.opacity = "0";

    // playMySound("audio/pacman-death.mp3", false, 0.4);
});

document.getElementById("glass-bottle").addEventListener("click", () => {
    document.getElementById("ban").style.opacity = "0";
    document.getElementById("glass-bottle").style.opacity = "0";
    document.getElementById("bottle-under-faucet").style.opacity = "1";

    // playMySound("audio/success.mp3", false, 0.4);
});


