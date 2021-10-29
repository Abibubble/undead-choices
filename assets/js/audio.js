// -------------------------------------------------------------------------------------------------- Audio

// ---------------------------------------------------------------- Audio variables

let music = false; // Start with audio off, autoplay is super bad

const audioFile = { // Set audio files within object
    giggle: new Audio('assets/audio/giggle.mp3'),
    bubbles: new Audio('assets/audio/boiling-bubbles.mp3'),
    drink: new Audio('assets/audio/drinking-water.mp3'),
    largeHorde: new Audio('assets/audio/large-horde.mp3'),
    smallHorde: new Audio('assets/audio/small-horde.mp3'),
    puddle: new Audio('assets/audio/step-puddle.mp3'),
    windy: new Audio('assets/audio/windy-trees.mp3'),
    background: new Audio('assets/audio/low_bensound-ofeliasdream.mp3'),
    backgroundIntense: new Audio('assets/audio/low_bensound-evolution.mp3'),
    zombie: {
        bite: new Audio('assets/audio/zombie-biting.mp3'),
        hiss: new Audio('assets/audio/zombie-hiss.mp3'),
        moan: new Audio('assets/audio/zombie-moan.mp3'),
    },
};

function playSoundEffect(which) {
    if (music) {
        switch (which.toLowerCase()) {
            case 'bubbles':
                audioFile.bubbles.play();
                break;
            case 'drink':
                audioFile.drink.play();
                break;
            case 'largehorde':
                audioFile.largeHorde.play();
                break;
            case 'smallhorde':
                audioFile.smallHorde.play();
                break;
            case 'puddle':
                audioFile.puddle.play();
                break;
            case 'windy':
                audioFile.windy.play();
                break;
            case 'background':
                audioFile.backgroundIntense.pause();
                audioFile.background.play();
                break;
            case 'backgroundintense':
                audioFile.background.pause();
                audioFile.backgroundIntense.play();
                break;
            case 'bite':
                audioFile.zombie.bite.play();
                break;
            case 'hiss':
                audioFile.zombie.hiss.play();
                break;
            case 'moan':
                audioFile.zombie.moan.play();
                break;
            case 'giggle':
                audioFile.giggle.play();
                break;
            default:
                break;
        }
    }
}

function pauseSoundEffect(which) {
    switch (which.toLowerCase()) {
        case 'bubbles':
            audioFile.bubbles.pause();
            break;
        case 'drink':
            audioFile.drink.pause();
            break;
        case 'largehorde':
            audioFile.largeHorde.pause();
            break;
        case 'smallhorde':
            audioFile.smallHorde.pause();
            break;
        case 'puddle':
            audioFile.puddle.pause();
            break;
        case 'windy':
            audioFile.windy.pause();
            break;
        case 'background':
            audioFile.background.pause();
            break;
        case 'backgroundintense':
            audioFile.backgroundIntense.pause();
            break;
        case 'bite':
            audioFile.zombie.bite.pause();
            break;
        case 'hiss':
            audioFile.zombie.bite.pause();
            break;
        case 'moan':
            audioFile.zombie.moan.pause();
            break;
        case 'giggle':
            audioFile.giggle.pause();
            break;
        default:
            break;
    }
}

// ---------------------------------------------------------------- Toggle audio

const audioButton = document.getElementById("audio-btn"); // Toggle the audio on/off button

audioButton.addEventListener("click", function () {
    if (music) {
        audioButton.innerHTML = `<i class="fas fa-volume-off"></i><br><span class="toggle">Toggle </span>Audio`;
        audioFile.background.pause();
    } else {
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br><span class="toggle">Toggle </span>Audio`;
        audioFile.background.play();
        audioFile.background.loop = true;
    }
    music = !music;
});