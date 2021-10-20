
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
    spider.style.height = `74vh`;
    setTimeout(function () {
        spiderWeb.style.backgroundColor = "#faebd700";

    }, 4500);
}

function resetSpider (){
    spider.classList.add("hide");
    spider.style.height = `0vh`;
    const rndInt = Math.floor(Math.random() * 86) + 1  // get random number to offset spider
    spider.style.right = rndInt + "%"
    //remove animation class
    spider.classList.remove("spider-animation");
    spiderWeb.classList.remove("spider-web-animation");
    // to reset animation
     void spider.offsetWidth;
     void spiderWeb.offsetWidth;
     // and re-adding the class
    spider.classList.add("spider-animation");
    spiderWeb.classList.add("spider-web-animation");
    spiderWeb.style.backgroundColor = "#faebd7";
    setTimeout(function () {
        spider.classList.remove("hide");
    }, 1500);
}