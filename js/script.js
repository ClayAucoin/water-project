/**
 * Play a sound from a given URL.
 * @param {string} src - The sound file URL.
 * @param {boolean} [loop=false] - Whether to loop the sound.
 * @param {number} volume - Volume of the sound. 0.0 = silent, 1.0 = full
 * 
 * @example
 * playSound("beep.mp3");
 */
function _playMySound(src, loop = false, volume = 1.0) {
    if (!src) {
        console.warn("playMySound: No SRC provided.");
        return;
    };
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;   // 0.0 = silent, 1.0 = full
    audio.currentTime = 0;
    audio.play();
    console.info("playMySound: Playing " + src +
        (loop ? " (looping)" : "") +
        (volume !== undefined ? ` (volume=${volume})` : "")
    );
}

