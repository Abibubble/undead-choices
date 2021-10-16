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

// ---------------------------------------------------------------- Toggle audio

const audioButton = document.getElementById("audio-btn"); // Toggle the audio on/off button

audioButton.addEventListener("click", function () {
    if (music) {
        audioButton.innerHTML = `<i class="fas fa-volume-off"></i><br>Toggle audio`;
    } else {
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br>Toggle audio`;
    }
    music = !music;
});

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

// -------------------------------------------------------------------------------------------------- Misc

// -------------------------------------------------------------------- Copyright

function copyrightYear() {
    var d = new Date();
    var y = d.getFullYear();
    document.getElementById("copyright").innerHTML = y;
}

copyrightYear();

// -------------------------------------------------------------------- Update progress bar

const progressBar = document.getElementById("progress-bar");

function updateProgressBar(progress) {
    progressBar.style.width = `${String(progress)}%`;
}

updateProgressBar(4);

// -------------------------------------------------------------------- Characters

let spider = document.getElementsByClassName("little-spider")[0];
let spiderWeb = document.getElementById("spider-web");

function moveSpider() {
    spider.style.height = `74vh`
    setTimeout(function () {
        spiderWeb.style.backgroundColor = "#faebd700";

    }, 10000);
}
