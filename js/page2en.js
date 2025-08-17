
document.getElementById("plastic-bottle").addEventListener("click", () => {
    document.getElementById("ban").style.opacity = 1;
    document.getElementById("glass-bottle").style.opacity = 1;
    document.getElementById("bottle-under-faucet").style.opacity = 0;

    playMySound("audio/pacman-death.mp3", false, 0.4);
});

document.getElementById("glass-bottle").addEventListener("click", () => {
    document.getElementById("ban").style.opacity = 0;
    document.getElementById("glass-bottle").style.opacity = 0;
    document.getElementById("bottle-under-faucet").style.opacity = 1;

    playMySound("audio/success.mp3", false, 0.4);
});

