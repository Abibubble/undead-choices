// -------------------------------------------------------------------------------------------------- Variables

let pronoun_their = "their";
let pronoun_them = "them";
let pronoun_they = "they";
let zombieKingVisited = "kingNotSeen";
let age = "child";
let userName = "Zebedee";
const currentPage = document.getElementsByClassName("page current")[0];
const waitingPage = document.getElementsByClassName("page waiting")[0];

// -------------------------------------------------------------------------------------------------- Game Choices

// -------------------------------------------------------------------- Age setup

function checkAge() {
    age = this.id;
    document.getElementById("age-modal").classList.add("hide");
}

document.querySelectorAll(".modal-btn").forEach(btn => {
    btn.addEventListener("click", checkAge);
});

// -------------------------------------------------------------------- User name / Brian modal

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
    userNameInput.children[0].classList.add("hide");
    userNameInput.children[1].classList.add("hide");
    flipPage(background);
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

// -------------------------------------------------------------------- In-game choices

class ChoicesMade {
    constructor() {
    this.redDrinkresult = {
        kingSeen: `cave`,
        kingNotSeen: `room`
    };
    this.collectDrink = {
        kingSeen: `finally making ${pronoun_their} way back to Toby and his horde.`,
        kingNotSeen: `coming back to where ${pronoun_they} began ${pronoun_their} journey.`,
    };
    // purpleDrinkResult
}
}

class AgeInserts {
    constructor() {
    this.eastOneMalteasers = {
        adult: `The splintered stake plunged through ${userName}'s soft flesh with a squelch. `,
        child: "",
    };
    this.drinkSelectDrink = {
        adult: `${pronoun_they} reached forward, and`,
        child: `As ${pronoun_they} reached forward, the chocolate bar wrapper fell from ${pronoun_their} pocket as ${pronoun_they}`,
    };
    this.redDrinkSmell = {
        adult: `${pronoun_they} would have been overcome with a putrid odour of stale blood, sulphur, and a hint of petrol.`,
        child: `${pronoun_they} would have fainted from the foul smell.`,
    };
    this.redDrinkResult = {
        adult: `${userName} wretched as the liquid bubbled ferociously, ${pronoun_their} insides burned. It was a mistake. ${pronoun_their} stomach churned, heat exploded within ${pronoun_them}, and then... BANG. ${userName}'s gooey insides exploded all over the ${choicesMade.redDrinkresult[zombieKingVisited]}!`,
        child: `It gurgled as it reached ${pronoun_their} stomach. ${userName} was overcome with drowsiness, ${pronoun_their} eyes grew heavy and ${pronoun_they} slumped to the floor...`,
    };
    this.blueDrinkResult = {
        adult: `Pain seared from ${pronoun_their} foot, but the pain was welcomed... `,
        child: "",
    };
    this.collectDrink = {
        adult: `${userName} reached forward to collect a concoction and continued on their quest...`,
        child: `As ${userName} reached forward to collect a concoction, the chocolate wrapper fell from ${pronoun_their} pocket. They selected a potion and continued on their quest...`,
    };
    this.collectReturn = {
        adult: ` It was pressed a little too tightly against ${pronoun_their} body, ${pronoun_they} heard a rib crack under the extra pressure. Oh well...`,
        child: "",
    };
    this.westOneBrian2 = {
        adult: `Green goo oozed from its neck, one stick of an arm was broken halfway. The top of his head had melted away, exposing a pulsating mass of blue gunk - was that a brain?`,
        child: `This truly was no ordinary snowman at all!`,
    };
    this.feedFeed4 = {
        adult: `Green goo dripped on top of ${userName}'s head. Brian grinned an evil grin. 'I am Brian, zombie O'Greedy! I will not be eaten by a puny human zombie... I will feast upon you!' he roared. And with that, he ripped poor ${userName} limb from limb as he devoured ${pronoun_their} soft, fleshy carcass.`,
        child: `'For your crime against me, you will remain under me, forever!' Brian bellowed, as he rolled his body on top of ${userName}... ${userName} was never seen again`,
    };
    this.northNorth2 = {
        adult: `Toby, the King of Zombies, watched from a distant hilltop as ${userName} walked into the trees. He sighed, resigned to losing another potential helper.`,
        child: `Many years went by. Many moons shone bright over that forest. Many tales were told of ${userName} in the surrounding towns.`
    };
    this.northNorth3 = {
        adult: `He picked up the Porter's X2 RayGun that lay on the ground beside him and passed it to a very large zombie. 'Take ${pronoun_them} out' he declared. The zombie nodded, aimed, and fired. 'BOOM! Headshot!' the zombie laughed.`,
        child: `Some say footsteps can be heard in the North, but ${userName} was never seen again...`
    };
    this.southSouth2 = {
        adult: ` Another was using its own bloody finger to paint on the cave wall.`,
        child: "",
    };
    this.dontHelpdontHelp2 = {
        adult: `A bathtub sat over a fire, brown liquid frothing inside. 'To the coffee bath!' Toby cried.`,
        child: `The zombies stopped their circles and closed in around ${userName}.`,
    };
    this.dontHelpdontHelp3 = {
        adult: `The zombies stopped ${pronoun_their} circles and grabbed hold of ${userName}, carrying ${pronoun_them} to the bath. ${pronoun_they} threw ${pronoun_them} in and jeered and groaned as ${userName}'s mushy body melted in the hot coffee pot.`,
        child: `The zombies trapped ${userName}, ${pronoun_they} couldn't move. They picked ${pronoun_them} up and carried ${pronoun_them} to the back of the cave, never to be seen again...`,
    };
}
}

// -------------------------------------------------------------------- Storyline

class Story {
    constructor() {
        this.page1 = {
            begin: "The wind whistles through the trees, creepy crawlies scurry around the undergrowth, a wolf howls in the distance.",
            moon: "Under the full moon, in the depths of the forest, a human-like creature looks around. Not sure of how it got here, not sure where 'here' even is!",
            name: "It knows its hands are cold, in fact, everything is cold, down to its blood and bones. It knows one more thing - its name...",
        };
        // user inputs name
        this.page2 = {
            avatar: `${userName} hunched down. Staring into a murky puddle, their reflection can just about be seen...\n
            What did they see?`,
        };
        // user inputs avatar
        this.page3 = {
            riband: `A blue Riband chocolate bar fell out of ${pronoun_their} pocket. Overcome with hunger, ${pronoun_they} tried to eat it... but it did nothing for ${pronoun_them}. ${userName} wanted something different, something new... something... human! BRAINS!`,
            zombie: `${userName} stumbled forward as ${pronoun_they} realised what ${pronoun_they} had become, ${userName} was... A zombie! With this daunting realisation, ${userName} set off in search of some succulent grey matter to feed on...`,
        };
        // choose east or west
        // east
        this.east1 = {
            east: `${userName} headed East, ambling through the forest, ${pronoun_their} feet heavy and clumsy. ${pronoun_they} stepped heavily on a branch, breaking it with a loud CRACK.`,
            maltesers: `${ageInserts.eastOneMalteasers[age]}${userName} looked down to see a packet of Maltesers too, obliterated in their red packaging. They wouldn't be any good. Undeterred, ${userName} continued.`,
        };
        this.east2 = {
            ciLab: `As the edge of the forest grew nearer, a large, industrial building loomed ahead. ${userName} approached, a tattered sign read 'CI Chemical Laboratory'. The remnants of an orange circular logo glimmered in the moonlight.`,
            twirl: `${userName} clambered over some old barrels toward a slightly open door. A tatty heart-shaped box lay on the floor. It appeared to have a Twirl inside it, the purple wrapper just sticking out. No need for more chocolate!`,
        };
        this.east3 = {
            brambles: `Thick brambles grew into the door frame, ${userName} pried it open with a loud creak. Inside, down a dark and eery corridor, ${userName} came to a dimly lit room.`,
        };
        this.east4 = {
            flasks: `Rotten pumpkins sat in the corner, rats nibbling at the remains. On a table in the middle of the room, there stood three pristine glass flasks...`,
            table: `${userName} groaned as ${pronoun_they} lurched toward the table. The rats in the corner scuttled away into the cracks in the walls.`,
            potions: `A bright purple liquid glowed in the first flask; a deep, blood-red broth sat bubbling in the second; and a shimmering blue goo gurgled in the third.`,
        };
        // choose to drink or collect
        // drink
        this.drink = {
            selectDrink: `${ageInserts.drinkSelectDrink[age]} tentatively selected a drink...`,
        };
        // choose drink colour
        this.redDrink = {
            smell: `${userName} lifted the bubbling broth to ${pronoun_their} lips. If ${pronoun_their} sense of smell still worked, ${ageInserts.redDrinkSmell[age]}`,
            drink: `Hoping for the best, ${userName} poured the mixture down ${pronoun_their} throat.`,
            result: `${ageInserts.redDrinkResult[age]}`,
            // dead
        };
        this.purpleDrink = {
            drink: `${userName} raised the glowing liquid, gazing at its beautiful colour. Closing ${pronoun_their} eyes, ${userName} tilted ${pronoun_their} head back and downed the strange concoction in one large gulp.`,
            result1: `A warmth flooded through ${pronoun_them}. ${userName} heard a clattering from the next room and crept over to investigate. Inside, sweeping with an old tattered broom, a witch looked back at ${userName}. Overcome with adoration, ${pronoun_they} staggered forward.`,
            result2: `The witch announced her name, Jinx. ${userName} fell deeply in love with Jinx immediately, as the wicked witch enticed ${pronoun_them} over to a cage in the corner. She ushered ${userName} inside, locked the door and that was the last time ${userName} was ever seen...`,
            // end
        };
        this.blueDrink = {
            drink: `${userName} slowly picked up the gleaming blue brew. ${pronoun_their} hand trembled as ${pronoun_they} brought it to ${pronoun_their} mouth. Slowly, ${userName} began to sip from the flask.`,
            result: `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${userName} was cured! ${ageInserts.blueDrinkResult[age]}${userName} knew ${pronoun_they} were human once again!`,
            // win...but not fully
        };
        // collect
        // choose drink colour
        this.collect = {
            drink: `${ageInserts.collectDrink[age]}`,
            // save color of drink
            // has drink boolean true
            return: `${userName} headed back toward the entrance of the laboratory. ${pronoun_they} stowed the flask inside a pocket of ${pronoun_their} jacket for safekeeping.${ageInserts.collectReturn[age]}`,
            back: `${userName} trudged slowly back into the forest, ${choicesMade.collectDrink[[zombieKingVisited]]}`,
            // west
            // if zombieKingSeen --> story.yes.potions1
        };
        // west
        this.west1 = {
            west: `Lumbering on through the tall trees to the West, ${userName} felt a chill as ${pronoun_they} approached a clearing. Stood in the middle, 10ft tall, a snowman leered toward ${userName}.`,
            brian: `'Mmmrrroohahg' it groaned, 'Mmmmrrr I am Brian... zombie o'greedy!'. As the snowman murmured his introduction, ${userName} could see this was no ordinary snowman.`,
            brian2: `Beneath a dark pair of sunglasses, glowing red eyes could be seen. ${ageInserts.westOneBrian2[age]}`,
            brian3: `This was a zombie snowman! Should ${userName} try and feed on this creature's brains?`,
        };
        // feed or don't feed
        // feed
        this.feed = {
            feed1: `Stood on the edge of the clearing, ${userName} beckoned the snowman over to ${pronoun_them}. Brian rolled forward toward ${userName}. Its lower body section seemingly separate, like a wheel, allowing him to stay upright.`,
            feed2: `As he slowed to a stop, ${userName} clambered up the nearest tree. Crawling along a branch, when Brian stood just below, ${userName} dropped onto his head. As ${userName} tried to take a bite into the snowman's head, ${pronoun_they} were very glad ${pronoun_their} sense of taste had failed.`,
            feed3: `Brian roared in anger! He flung ${userName} to the ground, and leaned over ${pronoun_them}.`,
            feed4: `${ageInserts.feedFeed4[age]}`,
            // dead
        };
        // don't feed
        this.noFeed = {
            noFeed1: `Using what was left of ${pronoun_their} logic, ${userName} decided it best not to take on a 10ft snowman zombie and greeted Brian instead.`,
            noFeed2: `'Hello, I am ${userName},' ${userName} called out, 'I mean you no harm, can you help me?'. An eery howl was heard in the distance. Brian trundled toward ${pronoun_them}.`,
            noFeed3: `'You look pale,' Brian groaned, 'You must be one of Toby's creeps... He is the king of all zombies!! I hear he is looking for the cure, perhaps you can help him.'.`,
            noFeed4: `The giant snowman waved an arm vaguely to the south, 'Head that way, you will find him soon enough.'`,
        };
        // search for the king or not (south or north)
        this.north = {
            north1: `${userName} didn't like the sound of a zombie king. ${pronoun_they} took ${pronoun_their} chances and turned to the trees and walked on... and on... and on...`,
            north2: `${ageInserts.northNorth2[age]}`,
            north3: `${ageInserts.northNorth3[age]}`,
            // dead
        };
        this.south = {
            south1: `${userName} headed toward the south. The trees seemed to be more twisted now. An owl sat up high, hooting. A dull and rhythmic thudding grew louder as ${userName} stomped toward a cave.`,
            south2: `The glow of a firey torch illuminated the cave entrance. A horde of zombies marched mindlessly in circles. A couple of zombies sat off to one side, boiling something in a pan.${ageInserts.southSouth2[age]}`,
            toby: `'Welcome, ${userName}, I am Toby... King of the Zombies!' a loud and powerful voice echoed, 'I am fed up with these imbeciles, look at those two trying to make rice! What use is that to our kind? Especially when it's so burnt?!'`,
            toby2: `${userName} saw a grand-looking figure gesturing to the couple by the cave entrance. His eyes were piercing ice white, his stocky frame looked less squidgy than the other zombies. A regal necklace surrounded his collar and a jewelled crown sat atop his head.`,
            toby3: `Truly, he was the King. ${userName} groaned as ${pronoun_they} walked toward this mighty zombie. 'How did you know my name?' ${userName} asked with a quivering, croaky voice.`,
            toby4: `'I know all zombies!' Toby replied, 'Now... Are you here to help me?'`,
        };
        // help or don't help
        // help
        this.help = {
            help1: `'I will help you,' ${userName} said, sounding more confident than anticipated, 'Brian said you are searching for a cure?'.`,
            help2: `'Yes, I heard of a witch who made us this way,' Toby glared menacingly out toward the dark night, 'She wouldn't be foolish enough to infect us all without a backup plan. Have you found any potions on your travels?'`,
        };
        // check has drink
        // has drink
        this.yes = {
            potions1: `${userName} reached inside ${pronoun_their} jacket, pulling out the flask from the laboratory. 'Yes,' ${pronoun_they} announced, 'Are you sure this is the cure?'.`,
            potions2: `Toby laughed, a deep and booming laugh, 'Well, it is you that will take the first drink, so you're going to find out!'`,
            potions3: `'Well, what are you waiting for?' Toby looked on in suspense, waiting for ${userName} to drink from the flask.`,
        };
        this.blue = {
            blue1: `Knowing there was no other choice, no way to avoid this fate, ${userName} raised the flask to ${pronoun_their} lips, closed ${pronoun_their} eyes, and swigged a mouthful.`,
            blue2: `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${userName} was cured!`,
            blue3: `${pronoun_they} passed the drink to Toby and waited for him to drink to his health. The warm blood rushed to Toby's cheeks as he shared the cure around the others.`,
            blue4: `${userName} and Toby left the cave, leading the other former zombies out into the light, clear-headed and focused, they found their way back to civilisation. Back to humanity.`,
            // win - yay!
        };
        this.red = {
            red1: `Knowing there was no other choice, no way to avoid this fate, ${userName} lifted the bubbling broth to ${pronoun_their} lips.`,
            red2: `If ${pronoun_their} sense of smell still worked, ${ageInserts.redDrinkSmell[age]}`,
            red3: `Hoping for the best, ${userName} poured the mixture down ${pronoun_their} throat.`,
            red4: `${ageInserts.redDrinkResult[age]}`,
            // dead
        };
        this.purple = {
            purple1: `Knowing there was no other choice, no way to avoid this fate, ${userName} raised the glowing liquid, gazing at its beautiful colour. Closing ${pronoun_their} eyes, ${userName} tilted ${pronoun_their} head back and downed the strange concoction in one large gulp.`,
            purple2: `A warmth flooded through ${pronoun_them}. ${pronoun_they} drank the entire potion. Toby cried out in anger... but ${userName} didn't care.`,
            purple3: `${pronoun_they} were absolutely overcome with love for Toby. Toby was perfect to ${pronoun_them}, in every way. ${pronoun_they} sat down next to Toby and told him everything would be OK, ${pronoun_they} had each other... and love was all that mattered.`,
            purple4: `The torchlight eventually dimmed, the sound of zombies stomping around and around finally silenced, and ${userName} was never seen again.`,
            // end ... yay??
        };
        this.no = {
            no1: `${userName} shuffled ${pronoun_their} feet awkwardly, looking down at the floor. 'I have not, I will go back through the forest and find this cure for us both' ${pronoun_they} declared, and headed off back to where ${pronoun_they} began.`,
            // east
        };
        this.dontHelp = {
            dontHelp1: `Not knowing what this could lead to, ${userName} tried to decline. As ${pronoun_they} turned to leave the cave, Toby called to his zombie followers, 'Don't let ${userName} leave. For this act against us all, we shall get our revenge.'`,
            dontHelp2: `He pointed to the back of the cave. ${ageInserts.dontHelpdontHelp2[age]}`,
            dontHelp3: `${ageInserts.dontHelpdontHelp3[age]}`,
        };
    }
}


// story control
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

// create background object to hold all backgrounds
let background = "url(assets/img/background/mock1.jpg)";

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
