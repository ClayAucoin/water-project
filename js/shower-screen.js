
var getLang = new URLSearchParams(window.location.search);
var language = getLang.get('lang');

if(language == "es"){
    document.getElementById("title").innerHTML = "Consejos de Conservación<br>del Agua";
    document.getElementById("subTitle").innerHTML = "Otra forma de ahorrar agua es tomar duchas más cortas. ¡Prueba a programar un temporizador de cinco minutos!";
    document.getElementById("instruction").innerHTML = "Haz clic en el temporizador";
}


document.getElementById("timer").addEventListener("click", () => {
    document.getElementById("timer").style.opacity = "0";
    document.getElementById("times-up").style.opacity = "1";

    playSound("audio/ding-cartoon.mp3", false, 0.2);
});

document.getElementById("shower-duck").addEventListener("click", () => {
    document.getElementById("shower-duck").style.opacity = "0";
    document.getElementById("rubber-duck").style.opacity = "1";
    document.getElementById("rubber-duck").style.pointerEvents = "auto";
});

document.getElementById("rubber-duck").addEventListener("click", () => {
    playSound("audio/water-bubbles.mp3", false, 0.2);
});
