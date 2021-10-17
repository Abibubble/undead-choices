
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
