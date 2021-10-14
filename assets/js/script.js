// -------------------------------------------------------------------------------------------------- Audio

// ---------------------------------------------------------------- Audio variables

let music = false; // Start with audio off, autoplay is super bad

const audioFile = { // Set audio files within object
    // possibly add each sub category of audio to nested object
    // would allow iterating through to add attributes (eg loop)
    one: new Audio('assets/audio/1.mp3'),
    two: new Audio('assets/audio/2.mp3'),
}
const audioButton = document.getElementById("audio"); // Select the audio on/off button

// ---------------------------------------------------------------- Toggle

audioFile.one.loop = true; // Loops the audio
audioFile.two.loop = true;

function whichMusic() { // Decide which audio to play depending on which page they're on

    if (music) {
        if (onePage.classList.contains("hide")) {
            audioFile.one.pause();
            audioFile.two.play();
        } else if (twoPage.classList.contains("hide")) {
            audioFile.one.play();
            audioFile.two.pause();
        } else {
            audioFile.one.play();
            audioFile.two.pause();
        }
    } else {
        audioFile.one.pause();
        audioFile.two.pause();
    }
}

function checkAudioButtons() { // Changes the text of the button once clicked
    if (music) {
        audioButton.innerHTML = `<i class="fas fa-volume-mute"></i><br>Audio off`;
    } else {
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br>Audio on`;
    }
}

function toggleMusic() { // So that the user can toggle the music off or on
    if (music) {
        music = false;
    } else {
        music = true;
    }
    checkAudioButtons();
    whichMusic();
}

// -------------------------------------------------------------------------------------------------- Misc

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();