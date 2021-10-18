// ----------------------------------------------------------------  User name / Brian modal

/**
 * @param {string} userName name input
 * @returns capitalised version of userName
 */
function capitalise(string) {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const userNameInput = document.getElementById("user-name-input-section");
document.getElementById("username-btn").addEventListener("click", function () {
    userName = document.getElementById("username-input").value;
    userName = capitalise(userName);
    if (userName === "Brian") {
        document.getElementById("brian-modal").classList.remove("hide");
    }

    if (userName === "" || userName === " ") {
        userName = "Jimmy";
    }

    userNameInput.children[0].classList.add("hide");
    userNameInput.children[1].classList.add("hide");
    story = new Story(); // generate story with new name
    ageInserts = new AgeInserts();
    nextPage();
});

document.getElementById("close-brian-modal").addEventListener("click", function () {
    document.getElementById("brian-modal").classList.add("hide");
});

// ----------------------------------------------------------------  Avatar setup

function checkAvatar(avatar) {
    if (avatar === "boy" || avatar === "man") {
        pronoun_their = "his";
        pronoun_them = "him";
        pronoun_they = "he";
    } else if (avatar === "girl" || avatar === "woman") {
        pronoun_their = "her";
        pronoun_them = "her";
        pronoun_they = "she";
    } else {
        pronoun_their = "their";
        pronoun_them = "them";
        pronoun_they = "they";
    }
}

// ---------------------------------------------------------------- Character animation

const girl = document.getElementById("girl");
const boy = document.getElementById("boy");
const man = document.getElementById("man");
const woman = document.getElementById("woman");
const candy = document.getElementById("candy");
const girlWalk = document.getElementById("girl_walk");
const boyWalk = document.getElementById("boy_walk");
const manWalk = document.getElementById("man_walk");
const womanWalk = document.getElementById("woman_walk");

girl.addEventListener("click", function () {
    character = "girl";
    checkAvatar(character);
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 4500);
    setTimeout(hideCharacter, 4500);
});

boy.addEventListener("click", function () {
    character = "boy";
    checkAvatar(character);
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 4500);
    setTimeout(hideCharacter, 4500);
});

man.addEventListener("click", function () {
    character = "man";
    checkAvatar(character);
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 4500);
    setTimeout(hideCharacter, 4500);
});

woman.addEventListener("click", function () {
    character = "woman";
    checkAvatar(character);
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 4500);
    setTimeout(hideCharacter, 4500);
});

candy.addEventListener("click", function () {
    character = "candy";
    checkAvatar(character);
    animateWalkingOff();
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 4500);
    setTimeout(hideCharacter, 4500);
});

function showCharacter() {
    if (age === "child") {
        girl.classList.remove("hide");
        boy.classList.remove("hide");
        candy.classList.remove("hide");
    } else if (age === "adult") {
        man.classList.remove("hide");
        woman.classList.remove("hide");
        candy.classList.remove("hide");
    }
}

function hideCharacter() {
    girl.classList.add("hide");
    boy.classList.add("hide");
    candy.classList.add("hide");
    man.classList.add("hide");
    woman.classList.add("hide");
    womanWalk.classList.add("hide");
    manWalk.classList.add("hide");
    boyWalk.classList.add("hide");
    girlWalk.classList.add("hide");
}

function animateWalkingOff(name) {
    if (name) {
        // walk off candy
    }

    if (name === "boy") {
        girl.classList.add("hide");
        candy.classList.add("hide");
        girlWalk.classList.remove("hide");
        girlWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");

    } else if (name === "girl") {
        boy.classList.add("hide");
        candy.classList.add("hide");
        boyWalk.classList.remove("hide");
        boyWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");

    } else if (name === "man") {
        woman.classList.add("hide");
        candy.classList.add("hide");
        womanWalk.classList.remove("hide");
        womanWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");

    } else if (name === "woman") {
        man.classList.add("hide");
        candy.classList.add("hide");
        manWalk.classList.remove("hide");
        manWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");

    } else if (age === "child") {
        girl.classList.add("hide");
        girlWalk.classList.remove("hide");
        girlWalk.style.animationName = "walkoff";
        boy.classList.add("hide");
        boyWalk.classList.remove("hide");
        boyWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");

    } else if (age === "adult") {
        woman.classList.add("hide");
        womanWalk.classList.remove("hide");
        womanWalk.style.animationName = "walkoff";
        man.classList.add("hide");
        manWalk.classList.remove("hide");
        manWalk.style.animationName = "walkoff";
        playSoundEffect("puddle");
    }
    moveSpider();
}

// ---------------------------------------------------------------- Story control

const pages = Array.from(Object.keys(story));

// paragraph control
const storyText = document.getElementById("story-text");
storyText.addEventListener("transitionend", checkButtons);
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const pageBtn = document.getElementById("next-page");

// Ending image for progress bar
const gravestone = document.getElementById("gravestone");
const heart = document.getElementById("heart");
const potion = document.getElementById("potion");

/**
 * Array of paragraphs from current page
 * @returns Array of paragraphs
 */
function getParas() {
    let paras = Array.from(Object.keys(story[pages[pageNumber - 1]]));
    return paras;
}

/** Modifies story text */
function populateStoryText() {
    getParas();
    storyText.innerText = story[pages[pageNumber - 1]][paras[paraNumber - 1]];
}

/**
 * show/hide next/page/previous buttons as required
 * @param {Number} paraNumber
 */
function checkButtons() {
    getParas();
    if (paraNumber >= paras.length) {
        nextBtn.classList.add("hide");
        if (!userInputRequired) {
            pageBtn.classList.remove("hide");
        }
    } else {
        nextBtn.classList.remove("hide");
        pageBtn.classList.add("hide");
    }
    if (paraNumber >= 2) {
        previousBtn.classList.remove("hide");
    } else {
        previousBtn.classList.add("hide");
    }
}

/**
 * moves to next paragraph
 */
function nextPara() {
    storyText.classList.add("scale-0");
    paraNumber++;
    previousBtn.classList.add("hide");
    pageBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    setTimeout(() => {
        populateStoryText();
        storyText.classList.remove("scale-0");
        runStory();
    }, 1500);
}

/**
 * moves to previous paragraph
 */
function previousPara() {
    storyText.classList.add("scale-0");
    paraNumber--;
    previousBtn.classList.add("hide");
    pageBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    setTimeout(() => {
        populateStoryText();
        storyText.classList.remove("scale-0");
    }, 1500);
    hideInputs(); // allows immediate hiding of inputs if paragraph reversed
}

// Scroll trough pages with keyboard arrow keys
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        if (nextBtn.classList.contains("hide")) {} else {
            nextPara();
        }
    }
    if (event.key === 'ArrowLeft') {
        if (previousBtn.classList.contains("hide")) {} else {
            previousPara();
        }
    }
});

nextBtn.addEventListener("click", nextPara);
previousBtn.addEventListener("click", previousPara);

// page control
pageBtn.addEventListener("click", nextPage);

/**
 * resets paraNumber, increases pageNumber and populates story text
 */
function nextPage() {
    if (pageNumber === 18) {
        if (hasDrink) {
            goToPage(19);
        } else {
            goToPage(23);
        }
    } else if (pageNumber === 23) {
        goToPage(4);
    } else {
        pageNumber++;
        paraNumber = 1;
        runStory();
        flipPage(background[pageNumber]);
        checkButtons();
        populateStoryText();
    }
}

function goToPage(destinationPageNumber) {
    pageNumber = destinationPageNumber;
    paraNumber = 1;
    runStory();
    flipPage(background[pageNumber]);
    checkButtons();
    populateStoryText();
}

function assignOutro() {
    pageBtn.removeEventListener("click", nextPage);
    pageBtn.addEventListener("click", outroPage);
}

function unassignOutro() {
    pageBtn.removeEventListener("click", outroPage);
    pageBtn.addEventListener("click", nextPage);
}

function outroPage() {
    let currentURL = window.location.href;
    let newURL = currentURL + "outro.html";
    window.location = newURL;
}

function hideInputs() {
    // name input
    userNameInput.children[0].classList.add("hide");
    userNameInput.children[1].classList.add("hide");

    hideEastWest();
    hideConsumeCollect();
    hideDrinks();
    hideFeedNoFeed();
    hideContinueOrFlee();
    hideHelpOrNot();
    unassignOutro();
}

function showNameInput() {
    userNameInput.children[0].classList.remove("hide");
    userNameInput.children[1].classList.remove("hide");
}

function runStory() {
    switch (pageNumber) {
        case 1:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(8);
                    userInputRequired = true;
                    setTimeout(showNameInput, 2500);
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 2:
            switch (paraNumber) {
                case 1:
                    updateProgressBar(14);
                    userInputRequired = true;
                    showCharacter();
                    break;
                default:
                    userInputRequired = false;
                    hideCharacter();
            }
            break;
        case 3:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(22);
                    userInputRequired = true;
                    showEastWest();
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 7:
            switch (paraNumber) {
                case 3:
                    if (zombieKingVisited === "kingNotSeen") {
                        updateProgressBar(34);
                    } else {
                        updateProgressBar(49);
                    }
                    userInputRequired = true;
                    showConsumeCollect();
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 8:
            switch (paraNumber) {
                case 1:
                    if (zombieKingVisited === "kingNotSeen") {
                        updateProgressBar(59);
                    } else {
                        updateProgressBar(94);
                    }
                    userInputRequired = true;
                    showDrinks(collectDrink);
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 9:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    // showRedDeath();
                    gravestone.classList.remove("hide");
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 10:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    // showPurpleDeath();
                    heart.classList.remove("hide");
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 11:
            switch (paraNumber) {
                case 2:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    // showWin();
                    potion.classList.remove("hide");
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 12:
            switch (paraNumber) {
                case 1:
                    userInputRequired = true;
                    if (zombieKingVisited === "kingNotSeen") {
                        updateProgressBar(52);
                    } else {
                        updateProgressBar(84);
                    }
                    showDrinks(collectDrink);
                    break;
                case 3:                    
                    userInputRequired = false;
                    if (zombieKingVisited === "kingNotSeen") {
                        goToPage(13);
                    } else {
                        goToPage(19);
                    }
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 13:
            switch (paraNumber) {
                case 4:
                    if (hasDrink) {
                        updateProgressBar(59);
                    } else {
                        updateProgressBar(25);
                    }
                    userInputRequired = true;
                    showFeedNoFeed();
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 14:
            switch (paraNumber) {
                case 4:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    gravestone.classList.remove("hide");
                    // showFeedDeath();
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 15:
            switch (paraNumber) {
                case 4:
                    if (hasDrink) {
                        updateProgressBar(66);
                    } else {
                        updateProgressBar(26);
                    }
                    userInputRequired = true;
                    showContinueOrFlee();
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 16:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(100);
                    userInputRequired = true;
                    stroyEnd = true;
                    gravestone.classList.remove("hide");
                    // showRunDeath();
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 17:
            switch (paraNumber) {
                case 6:
                    if (hasDrink) {
                        updateProgressBar(70);
                    } else {
                        updateProgressBar(32);
                    }
                    userInputRequired = true;
                    showHelpOrNot();
                    break;
                default:
                    userInputRequired = false;
                    hideInputs();
            }
            break;
        case 18:
            switch (paraNumber) {
                case 2:
                    if (hasDrink) {
                        updateProgressBar(76);
                    } else {
                        updateProgressBar(39);
                    }
                    break;
                default:
                    userInputRequired = false;
            }
            break;
        case 19:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(87);
                    userInputRequired = true;
                    switch (drinkColor) {
                        case "red":
                            goToPage(21);
                            break;
                        case "purple":
                            goToPage(22);
                            break;
                        case "blue":
                            goToPage(20);
                            break;
                        default:
                            // 404 page
                    }
                    break;
                default:
                    userInputRequired = false;
            }
            break;
        case 20:
            switch (paraNumber) {
                case 4:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    potion.classList.remove("hide");
                    // showWin();
                    // win
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 21:
            switch (paraNumber) {
                case 4:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    gravestone.classList.remove("hide");
                    // showRedDeath();
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 22:
            switch (paraNumber) {
                case 4:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    heart.classList.remove("hide");
                    // showPurpleDeath();
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        case 23:
            switch (paraNumber) {
                case 1:
                    updateProgressBar(45);
                    userInputRequired = false;
                    zombieKingVisited = "kingSeen";
                    break;
                default:
                    userInputRequired = false;
            }
            break;
        case 24:
            switch (paraNumber) {
                case 3:
                    updateProgressBar(100);
                    userInputRequired = false;
                    storyEnd = true;
                    gravestone.classList.remove("hide");
                    // showNoHelpDeath();
                    break;
                default:
                    userInputRequired = false;
                    storyEnd = false;
            }
            break;
        default:
            hideInputs();
            userInputRequired = false;
            storyEnd = false;
            gravestone.classList.add("hide");
            heart.classList.add("hide");
            potion.classList.add("hide");
    }
    if (storyEnd) {
        assignOutro();
    }
}

/**
 * @param {string} background url from object
 * clears page and flips next page on top.
 */
function flipPage(background) {
    currentPage.style.animationName = "flip-page";
    currentPage.style.backgroundImage = background;
    setTimeout(() => {
        waitingPage.style.backgroundImage = background;
        currentPage.style.animationName = "none";
    }, 2200);
}

populateStoryText();
checkButtons();