// ------------------------------------ User name / Brian modal

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

    userInputRequired = false;
    story = new Story(); // generate story with new name
    nextPage();
    // populateStoryText();
    userInputRequired = true; // needed for avatar selection
});

document.getElementById("close-brian-modal").addEventListener("click", function () {
    document.getElementById("brian-modal").classList.add("hide");
});

// -------------------------------------------------------------------- Avatar setup

function checkAvatar(avatar) {
    if (avatar === "boy" || avatar === "man") {
        pronoun_their = "his";
        pronoun_them = "him";
        pronoun_they = "he";
    } else if (avatar === "girl" || avatar === "woman") {
        pronoun_their = "her";
        pronoun_them = "them";
        pronoun_they = "she";
    } else {
        pronoun_their = "their";
        pronoun_them = "them";
        pronoun_they = "they";
    }
}

//----------------------------------------------------------------character animation

let girl = document.getElementById("girl");
let boy = document.getElementById("boy");
let man = document.getElementById("man");
let woman = document.getElementById("woman");
let candy = document.getElementById("candy");
let girlWalk = document.getElementById("girl_walk");
let boyWalk = document.getElementById("boy_walk");
let manWalk = document.getElementById("man_walk");
let womanWalk = document.getElementById("woman_walk");

girl.addEventListener("click", function () {
    character = "girl";
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 8500);
});
boy.addEventListener("click", function () {
    character = "boy";
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 8500);
});
man.addEventListener("click", function () {
    character = "man";
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 8500);
});
woman.addEventListener("click", function () {
    character = "woman";
    animateWalkingOff(character);
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 8500);
});
candy.addEventListener("click", function () {
    character = "candy";
    animateWalkingOff();
    story = new Story();
    ageInserts = new AgeInserts();
    setTimeout(nextPage, 8500);
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

// set gender = "boy"/

function animateWalkingOff(name) {
    if (name) {
        // walk off candy
    }
    if (name === "boy") {
        girl.classList.add("hide");
        candy.classList.add("hide");
        girlWalk.classList.remove("hide");
        girlWalk.style.animationName = "walkoff";
    } else if (name === "girl") {
        boy.classList.add("hide");
        candy.classList.add("hide");
        boyWalk.classList.remove("hide");
        boyWalk.style.animationName = "walkoff";
    } else if (name === "man") {
        woman.classList.add("hide");
        candy.classList.add("hide");
        womanWalk.classList.remove("hide");
        womanWalk.style.animationName = "walkoff";
    } else if (name === "woman") {
        man.classList.add("hide");
        candy.classList.add("hide");
        manWalk.classList.remove("hide");
        manWalk.style.animationName = "walkoff";
    } else if (age === "child") {
        girl.classList.add("hide");
        girlWalk.classList.remove("hide");
        girlWalk.style.animationName = "walkoff";
        boy.classList.add("hide");
        boyWalk.classList.remove("hide");
        boyWalk.style.animationName = "walkoff";
    } else if (age === "adult") {
        woman.classList.add("hide");
        womanWalk.classList.remove("hide");
        womanWalk.style.animationName = "walkoff";
        man.classList.add("hide");
        manWalk.classList.remove("hide");
        manWalk.style.animationName = "walkoff";
    }
    checkAvatar(name);
}

// ---------------------------------story control
let choicesMade = new ChoicesMade();
let ageInserts = new AgeInserts();
let story = new Story();

const pages = Array.from(Object.keys(story));
let pageNumber = 1;
let paraNumber = 1;
let userInputRequired = true;

// paragraph control
const storyText = document.getElementById("story-text");
storyText.addEventListener("transitionend", checkInputs);
storyText.addEventListener("transitionend", checkButtons);
const nextBtn = document.getElementById("next-btn");
const previousBtn = document.getElementById("previous-btn");
const pageBtn = document.getElementById("next-page");

/**
 * Array of paragraphs from current page
 * @returns Array of paragraphs
 */
function getParas() {
    return paras = Array.from(Object.keys(story[pages[pageNumber - 1]]));
}

/** Modifies story text and hides/shows buttons */
function populateStoryText() {
    getParas();
    storyText.innerText = story[pages[pageNumber - 1]][paras[paraNumber - 1]];
}

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
    checkInputs(); // allows immediate hiding of inputs if paragraph reversed
}

nextBtn.addEventListener("click", nextPara);
previousBtn.addEventListener("click", previousPara);

// page control
pageBtn.addEventListener("click", nextPage);

/**
 * resets paraNumber, increases pageNumber and populates story text
 */
function nextPage() {
    pageNumber++;
    flipPage(background[pageNumber]);
    paraNumber = 1;
    populateStoryText();
    checkInputs();
}

/**
 * check for required user inputs
 */
function checkInputs() {
    if ((pageNumber === 1) &&
        (paraNumber === 3)) {
        userNameInput.children[0].classList.remove("hide");
        userNameInput.children[1].classList.remove("hide");
    } else {
        userNameInput.children[0].classList.add("hide");
        userNameInput.children[1].classList.add("hide");
    }
    if (pageNumber === 2) {
        pageBtn.classList.add("hide");
        showCharacter();
    }
}

/**
 * clears page and flips next page on top.
 * @param {string} background url from object
 */
function flipPage(background) {
    currentPage.style.animationName = "flip-page";
    currentPage.style.backgroundImage = background;
    setTimeout(() => {
        waitingPage.style.backgroundImage = background;
        currentPage.style.animationName = "none";
    }, 2200)
}

populateStoryText();
checkButtons();

// function startStory() {
//         document.getElementById("story-text").innerText = story.begin;
// }
// for (let i = 0; i < pages.length; i++) {
//     const paras = Array.from(Object.keys(story[pages[i]]));
//     console.log(paras);
//     for (let p = 0; p < paras.length; p++) {
//         console.log(story[pages[i]][paras[p]]);
//     }
// }


/* rough logic for storybook
- for each page, maintain background. loop through paragraphs. (allow <--/-->)
- increase paragraph number until length is met, turn page. (change icon?)
- statements to check which page to go to next (ie, west/east)
- progress bar to update depending on variables set and page met
- each paragraph has a new image?
- each page has a new background?
- age is set at start
- avatar determines pronoun choice

- possibly have next paragraph loaded ready for transition?
- can be checked against length of paragraph array.
*/
