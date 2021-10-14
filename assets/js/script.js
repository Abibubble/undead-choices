// -------------------------------------------------------------------------------------------------- Audio

// ---------------------------------------------------------------- Audio variables

let music = "off"; // Start with audio off, autoplay is super bad
const oneAudio = new Audio('assets/audio/1.mp3'); // Set the audio files to variables
const twoAudio = new Audio('assets/audio/2.mp3');
const audioButton = document.getElementById("audio"); // Select the audio on/off button

// ---------------------------------------------------------------- Toggle

oneAudio.loop = true; // Loops the audio
twoAudio.loop = true;

function whichMusic() { // Decide which audio to play depending on which page they're on

    if (music === "on") {
        if (onePage.classList.contains("hide")) {
            oneAudio.play();
            twoAudio.pause();
        } else if (twoPage.classList.contains("hide")) {
            oneAudio.pause();
            twoAudio.play();
        } else {
            oneAudio.play();
            twoAudio.pause();
        }
    } else {
        oneAudio.pause();
        twoAudio.pause();
    }
}

function checkAudioButtons() { // Changes the text of the button once clicked
    if (music === "on") {
        audioButton.innerHTML = `<i class="fas fa-volume-mute"></i><br>Audio off`;
    } else {
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br>Audio on`;
    }
}

function toggleMusic() { // So that the user can toggle the music off or on
    if (music === "off") {
        music = "on";
    } else {
        music = "off";
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