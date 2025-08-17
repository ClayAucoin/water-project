
function playMySound(src, loop = false, volume = 1.0) {
    const sound = new Audio(src);
    sound.loop = loop;
    sound.volume = volume;   // 0.0 = silent, 1.0 = full
    sound.currentTime = 0;
    sound.play();
    return sound;
}

