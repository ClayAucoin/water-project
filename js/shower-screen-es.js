
document.getElementById("timer").addEventListener("click", () => {
    document.getElementById("timer").style.opacity = 0;
    document.getElementById("times-up").style.opacity = 1;

    playMySound("audio/ding-cartoon.mp3", false, 0.4);
});

document.getElementById("shower-duck").addEventListener("click", () => {
    document.getElementById("shower-duck").style.opacity = 0;
    document.getElementById("rubber-duck").style.opacity = 1;
    document.getElementById("rubber-duck").style.pointerEvents = "auto";
});

document.getElementById("rubber-duck").addEventListener("click", () => {
    playMySound("audio/water-bubbles.mp3", false, 0.4);
});
