// -------------------------------------------------------------------------------------------------- Audio

// ---------------------------------------------------------------- Audio variables

let music = false; // Start with audio off, autoplay is super bad

const audioFile = { // Set audio files within object
    // todo would allow iterating through to add attributes (eg loop) I CANT GET THIS TO WORK :'(
    bubbles: new Audio('assets/audio/boiling-bubbles.mp3'),
    drink: new Audio('assets/audio/drinking-water.mp3'),
    largeHorde: new Audio('assets/audio/large-horde.mp3'),
    smallHorde: new Audio('assets/audio/small-horde.mp3'),
    puddle: new Audio('assets/audio/step-puddle.mp3'),
    windy: new Audio('assets/audio/windy-trees.mp3'),
    zombie: {
        bite: new Audio('assets/audio/zombie-biting.mp3'),
        hiss: new Audio('assets/audio/zombie-hiss.mp3'),
        moan: new Audio('assets/audio/zombie-moan.mp3'),
    },
}
const audioButton = document.getElementById("audio"); // Select the audio on/off button

// ---------------------------------------------------------------- Toggle

// function whichMusic() { // Decide which audio to play depending on which page they're on
// commented out until decision made on audio for pages etc.
//     if (music) {
//         if (onePage.classList.contains("hide")) {
//             audioFile.one.pause();
//             audioFile.two.play();
//         } else if (twoPage.classList.contains("hide")) {
//             audioFile.one.play();
//             audioFile.two.pause();
//         } else {
//             audioFile.one.play();
//             audioFile.two.pause();
//         }
//     } else {
//         audioFile.one.pause();
//         audioFile.two.pause();
//     }
// }

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

//-------------update progress bar


function updateProgressBar(number){

}