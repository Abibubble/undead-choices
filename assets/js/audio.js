// -------------------------------------------------------------------------------------------------- Audio

// ---------------------------------------------------------------- Audio variables

let music = false; // Start with audio off, autoplay is super bad

const audioFile = { // Set audio files within object
    // todo would allow iterating through to add attributes (eg loop) I CANT GET THIS TO WORK :'(
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
}

function playSoundEffect(which) {
    if (which === 'bubbles') {
        audioFile.bubbles.play();
    } else if (which === 'drink') {
        audioFile.drink.play();
    } else if (which === 'largeHorde') {
        audioFile.largeHorde.play();
    } else if (which === 'smallHorde') {
        audioFile.smallHorde.play();
    } else if (which === 'puddle') {
        audioFile.puddle.play();
    } else if (which === 'windy') {
        audioFile.windy.play();
    } else if (which === 'background') {
        audioFile.backgroundIntense.pause();
        audioFile.background.play();
    } else if (which === 'backgroundIntense') {
        audioFile.background.pause();
        audioFile.backgroundIntense.play();
    } else if (which === 'bite') {
        audioFile.zombie.bite.play();
    } else if (which === 'hiss') {
        audioFile.zombie.hiss.play();
    } else if (which === 'moan') {
        audioFile.zombie.moan.play();
    }else if (which === 'giggle') {
        audioFile.giggle.play();
    }
}

function pauseSoundEffect(which){
    if (which === 'bubbles') {
        audioFile.bubbles.pause();
    } else if (which === 'drink') {
        audioFile.drink.pause();
    } else if (which === 'largeHorde') {
        audioFile.largeHorde.pause();
    } else if (which === 'smallHorde') {
        audioFile.smallHorde.pause();
    } else if (which === 'puddle') {
        audioFile.puddle.pause();
    } else if (which === 'windy') {
        audioFile.windy.pause();
    } else if (which === 'background') {
        // audioFile.backgroundIntense.pause();
        audioFile.background.pause();
    } else if (which === 'backgroundIntense') {
        // audioFile.background.pause();
        audioFile.backgroundIntense.pause();
    } else if (which === 'bite') {
        audioFile.zombie.bite.pause();
    } else if (which === 'hiss') {
        audioFile.zombie.hiss.pause();
    } else if (which === 'moan') {
        audioFile.zombie.moan.pause();
    }else if (which === 'giggle') {
        audioFile.giggle.pause();
    }
}

// ---------------------------------------------------------------- Toggle audio

const audioButton = document.getElementById("audio-btn"); // Toggle the audio on/off button

audioButton.addEventListener("click", function () {
    if (music) {
        audioButton.innerHTML = `<i class="fas fa-volume-off"></i><br>Toggle audio`;
        audioFile.background.pause();
    } else {
        audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br>Toggle audio`;
        audioFile.background.play();
    }
    music = !music;
});
