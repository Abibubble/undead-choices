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
audioButton.addEventListener("click", function () {
    if (music){
        music = false;

        audioButton.innerHTML = `<svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                        x="0px" y="0px" width="53.7px" height="53.7px" viewBox="0 0 213.7 213.7"
                        enable-background="new 0 0 213.7 213.7"
                        xml:space="preserve">
                        <title>An animated play audio button</title>
                        <polygon class='triangle' id="XMLID_18_" fill="white" stroke-width="7" stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "/>
                        <circle class='circle' id="XMLID_17_" fill="none" stroke-width="7" stroke-linecap="round"
                            stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"/>
                    </svg>`


    }else{
        music = true;

        audioButton.innerHTML = `<svg version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                        x="0px" y="0px" width="53.7px" height="53.7px" viewBox="0 0 213.7 213.7"
                        enable-background="new 0 0 213.7 213.7"
                        xml:space="preserve">
                        <title>An animated play audio button</title>
                        <polygon class='triangle' id="XMLID_18_" fill="yellow" stroke-width="7" stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "/>
                        <circle class='circle' id="XMLID_17_" fill="none" stroke-width="7" stroke-linecap="round"
                            stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"/>
                    </svg>`




    }
    checkAudioButtons()
});
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
        // audioButton.innerHTML = `<i class="fas fa-volume-mute"></i><br>Audio off`;
        console.log("music on");
    } else {
        // audioButton.innerHTML = `<i class="fas fa-volume-up"></i><br>Audio on`;
        console.log("music off");
    }
}

function toggleMusic() { // So that the user can toggle the music off or on
    music = !music;
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

// -------------------------------------------------------------------- Update progress bar


const progressBar = document.getElementById("progress-bar");

function updateProgressBar(progress) {
    progressBar.style.width = `${String(progress)}%`;
}

updateProgressBar(4);


//------------------------------characters
let spider = document.getElementsByClassName("little-spider")[0];
let spiderWeb = document.getElementById("spider-web");



function moveSpider() {
    spider.style.height = `74vh`
    setTimeout(function () {
        spiderWeb.style.backgroundColor = "#faebd700";

    }, 10000);
}

