
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

    }, 10000);
}
