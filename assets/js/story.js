function capitalise(string) {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let user_name = "name";
user_name = capitalise(user_name);
let pronoun_their = "their";
let pronoun_them = "them";
let pronoun_they = "they";
let adult = false;
let zombieKingVisited = "kingNotSeen";

// ! commented out for simplicity of testing
// function startStory() {
//     document.getElementById("story-text").innerText = story.begin;
// }

// function checkAge(age) {
//     if (age == "adult") {
//         adult = true;
//     } else {
//         adult = false;
//     }
//     document.getElementById("age-modal").classList.add("hide");
//     startStory();
// }

if (adult) {
    age = "adult";
} else {
    age = "child";
}

function checkAvatar(avatar) {
    if (avatar == "boy") {
        pronoun_their = "his";
        pronoun_them = "him";
        pronoun_they = "he";
    } else if (avatar == "girl") {
        pronoun_their = "her";
        pronoun_them = "them";
        pronoun_they = "she";
    } else {
        pronoun_their = "their";
        pronoun_them = "them";
        pronoun_they = "they";
    }
}

const choicesMade = {
    redDrinkresult: {
        kingSeen: `cave`,
        kingNotSeen: `room`
    },
    // purpleDrinkResult
}

const ageInserts = {
    eastOneMalteasers: {
        adult: `The splintered stake plunged through ${user_name}'s soft flesh with a squelch. `,
        child: "",
    },
    drinkSelectDrink: {
        adult: `${pronoun_they} reached forward, T`,
        child: `As ${pronoun_they} reached forward, the chocolate bar wrapper fell from ${pronoun_their} pocket as ${pronoun_they} t`,
    },
    redDrinkSmell: {
        adult: `${pronoun_they} would have been overcome with a putrid odour of stale blood, sulphur, and a hint of petrol.`,
        child: `${pronoun_they} would have fainted from the foul smell.`,
    },
    redDrinkResult: {
        adult:  `${user_name} wretched as the liquid bubbled ferociously, ${pronoun_their} insides burned. It was a mistake. ${pronoun_their} stomach churned, heat exploded within ${pronoun_them}, and then... BANG. ${user_name}'s gooey insides exploded all over the ${choicesMade.redDrinkresult[zombieKingVisited]}!`,
        child: `It gurgled as it reached ${pronoun_their} stomach. ${user_name} was overcome with drowsiness, ${pronoun_their} eyes grew heavy and ${pronoun_they} slumped to the floor...`,
    },
    blueDrinkResult: {
        adult: `Pain seared from ${pronoun_their} foot, but the pain was welcomed... `,
        child: "",
    },
    collectDrink: {
        adult: `${user_name} reached forward to collect a concoction and continued on their quest...`,
        child: `As ${user_name} reached forward to collect a concoction, the chocolate wrapper fell from ${pronoun_their} pocket. They selected a potion and continued on their quest...`,
    },
    collectReturn: {
        adult: ` It was pressed a little too tightly against ${pronoun_their} body, ${pronoun_they} heard a rib crack under the extra pressure. Oh well...`,
        child: "",
    },
    westOneBrian2: {
        adult: `Green goo oozed from its neck, one stick of an arm was broken halfway. The top of his head had melted away, exposing a pulsating mass of blue gunk - was that a brain?`,
        child: `This truly was no ordinary snowman at all!`,
    },
    feedFeed4: {
        adult: `Green goo dripped on top of ${user_name}'s head. Brian grinned an evil grin. 'I am Brian, zombie O'Greedy! I will not be eaten by a puny human zombie... I will feast upon you!' he roared. And with that, he ripped poor ${user_name} limb from limb as he devoured ${pronoun_their} soft, fleshy carcass.`,
        child:`'For your crime against me, you will remain under me, forever!' Brian bellowed, as he rolled his body on top of ${user_name}... ${user_name} was never seen again`,
    },
    southSouth2: {
        adult: ` Another was using its own bloody finger to paint on the cave wall.`,
        child: "",
    },
}


const story = {
    page1: {
        begin: "The wind whistles through the trees, creepy crawlies scurry around the undergrowth, a wolf howls in the distance.",
        moon: "Under the full moon, in the depths of the forest, a human-like creature looks around. Not sure of how it got here, not sure where 'here' even is!",
        name: "It knows its hands are cold, in fact, everything is cold, down to its blood and bones. It knows one more thing - its name...",
    },
    // user inputs name
    page2: {
        avatar: `${user_name} hunched down. Staring into a murky puddle, their reflection can just about be seen...`,
    },
    // user inputs avatar
    page3: {
        riband: `A blue Riband chocolate bar fell out of ${pronoun_their} pocket. Overcome with hunger, ${pronoun_they} tried to eat it... but it did nothing for ${pronoun_them}. ${user_name} wanted something different, something new... something... human! BRAINS!`,
        zombie: `${user_name} stumbled forward as ${pronoun_they} realised what ${pronoun_they} had become, ${pronoun_they} were... A zombie! With this daunting realisation, ${user_name} set off in search of some succulent grey matter to feed on...`,
    },
    // choose east or west
    // east
    east1: {
        east: `${user_name} headed East, ambling through the forest, ${pronoun_their} feet heavy and clumsy. ${pronoun_they} stepped heavily on a branch, breaking it with a loud CRACK.`,
        maltesers: `${ageInserts.eastOneMalteasers[age]}${user_name} looked down to see a packet of Maltesers too, obliterated in their red packaging. They wouldn't be any good. Undeterred, ${user_name} continued.`,
    },
    east2: {
        ciLab: `As the edge of the forest grew nearer, a large, industrial building loomed ahead. ${user_name} approached, a tattered sign read 'CI Chemical Laboratory'. The remnants of an orange circular logo glimmered in the moonlight.`,
        twirl: `${user_name} clambered over some old barrels toward a slightly open door. A tatty heart-shaped box lay on the floor. It appeared to have a Twirl inside it, the purple wrapper just sticking out. No need for more chocolate!`,
    },
    east3: {
        brambles: `Thick brambles grew into the door frame, ${user_name} pried it open with a loud creak. Inside, down a dark and eery corridor, ${user_name} came to a dimly lit room.`,
    },
    east4: {
        flasks: `Rotten pumpkins sat in the corner, rats nibbling at the remains. On a table in the middle of the room, there stood three pristine glass flasks...`,
        table: `${user_name} groaned as ${pronoun_they} lurched toward the table. The rats in the corner scuttled away into the cracks in the walls.`,
        potions: `A bright purple liquid glowed in the first flask; a deep, blood-red broth sat bubbling in the second; and a shimmering blue goo gurgled in the third.`,
    },
    // choose to drink or collect
    // drink
    drink: {
        selectDrink: `${ageInserts.drinkSelectDrink[age]}entatively selected a drink...`,
    },
    // choose drink colour
    redDrink: {
        smell: `${user_name} lifted the bubbling broth to ${pronoun_their} lips. If ${pronoun_their} sense of smell still worked, ${ageInserts.redDrinkSmell[age]}`,
        drink: `Hoping for the best, ${user_name} poured the mixture down ${pronoun_their} throat.`,
        result: `${ageInserts.redDrinkResult[age]}`,
        // dead
    },
    purpleDrink: {
        drink: `${user_name} raised the glowing liquid, gazing at its beautiful colour. Closing ${pronoun_their} eyes, ${user_name} tilted ${pronoun_their} head back and downed the strange concoction in one large gulp.`,
        result1: `A warmth flooded through ${pronoun_them}. ${user_name} heard a clattering from the next room and crept over to investigate. Inside, sweeping with an old tattered broom, a witch looked back at ${user_name}. Overcome with adoration, ${pronoun_they} staggered forward.`,
        result2: `The witch announced her name, Jinx. ${user_name} fell deeply in love with Jinx immediately, as the wicked witch enticed ${pronoun_them} over to a cage in the corner. She ushered ${user_name} inside, locked the door and that was the last time ${user_name} was ever seen...`,
        // end
    },
    blueDrink: {
        drink: `${user_name} slowly picked up the gleaming blue brew. ${pronoun_their} hand trembled as ${pronoun_they} brought it to ${pronoun_their} mouth. Slowly, ${user_name} began to sip from the flask.`,
        result: `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${user_name} was cured! ${ageInserts.blueDrinkResult[age]}${user_name} knew ${pronoun_they} were human once again!`,
        // win...but not fully
    },
    // collect
    // choose drink colour
    collect: {
        drink: `${ageInserts.collectDrink[age]}`,
        // save color of drink
        // has drink boolean true
        return: `${user_name} headed back toward the entrance of the laboratory. ${pronoun_they} stowed the flask inside a pocket of ${pronoun_their} jacket for safekeeping.${ageInserts.collectReturn[age]}`,
        back: `${user_name} trudged slowly back into the forest, coming back to where ${pronoun_they} began ${pronoun_their} journey.`,
    },
    // west
    west1: {
        west: `Lumbering on through the tall trees to the West, ${user_name} felt a chill as ${pronoun_they} approached a clearing. Stood in the middle, 10ft tall, a snowman leered toward ${user_name}.`,
        brian: `'Mmmrrroohahg' it groaned, 'Mmmmrrr I am Brian... zombie o'greedy!'. As the snowman murmured his introduction, ${user_name} could see this was no ordinary snowman.`,
        brian2: `Beneath a dark pair of sunglasses, glowing red eyes could be seen. ${ageInserts.westOneBrian2[age]}`,
        brian3: `This was a zombie snowman! Should ${user_name} try and feed on this creature's brains?`,
    },
    // feed or don't feed
    // feed
    feed: {
        feed1: `Stood on the edge of the clearing, ${user_name} beckoned the snowman over to ${pronoun_them}. Brian rolled forward toward ${user_name}. Its lower body section seemingly separate, like a wheel, allowing him to stay upright.`,
        feed2: `As he slowed to a stop, ${user_name} clambered up the nearest tree. Crawling along a branch, when Brian stood just below, ${user_name} dropped onto his head. As ${user_name} tried to take a bite into the snowman's head, ${pronoun_they} were very glad ${pronoun_their} sense of taste had failed.`,
        feed3: `Brian roared in anger! He flung ${user_name} to the ground, and leaned over ${pronoun_them}.`,
        feed4: `${ageInserts.feedFeed4[age]}`,
        // dead
    },
    // don't feed
    noFeed: {
        noFeed1: `Using what was left of ${pronoun_their} logic, ${user_name} decided it best not to take on a 10ft snowman zombie and greeted Brian instead.`,
        noFeed2: `'Hello, I am ${user_name},' ${user_name} called out, 'I mean you no harm, can you help me?'. An eery howl was heard in the distance. Brian trundled toward ${pronoun_them}.`,
        noFeed3: `'You look pale,' Brian groaned, 'You must be one of Toby's creeps... He is the king of all zombies!! I hear he is looking for the cure, perhaps you can help him.'.`,
        noFeed4:  `The giant snowman waved an arm vaguely to the south, 'Head that way, you will find him soon enough.'`,
    },
    // search for the king or not (south or north)
    north: {
        north1: `${user_name} didn't like the sound of a zombie king. ${pronoun_they} took ${pronoun_their} chances and turned to the trees and walked on... and on... and on...`,
        north2: `Toby, the King of Zombies, watched from a distant hilltop as ${user_name} walked into the trees. He sighed, resigned to losing another potential helper.`,
        north3: `He picked up the Porter's X2 RayGun that lay on the ground beside him and passed it to a very large zombie. 'Take ${pronoun_them} out' he declared. The zombie nodded, aimed, and fired. 'BOOM! Headshot!' the zombie laughed.`,
        // dead
    },
    south: {
        south1: `${user_name} headed toward the south. The trees seemed to be more twisted now. An owl sat up high, hooting. A dull and rhythmic thudding grew louder as ${user_name} stomped toward a cave.`,
        south2: `The glow of a firey torch illuminated the cave entrance. A horde of zombies marched mindlessly in circles. A couple of zombies sat off to one side, boiling something in a pan.${ageInserts.southSouth2[age]}`,
        toby: `'Welcome, ${user_name}, I am Toby... King of the Zombies!' a loud and powerful voice echoed, 'I am fed up with these imbeciles, look at those two trying to make rice! What use is that to our kind? Especially when it's so burnt?!'`,
        toby2: `${user_name} saw a grand-looking figure gesturing to the couple by the cave entrance. His eyes were piercing ice white, his stocky frame looked less squidgy than the other zombies. A regal necklace surrounded his collar and a jewelled crown sat atop his head.`,
        toby3: `Truly, he is the King. ${user_name} groaned as ${pronoun_they} walked toward this mighty zombie. 'How did you know my name?' ${user_name} asked with a quivering, croaky voice.`,
        toby4: `'I know all zombies!' Toby replies, 'Now... Are you here to help me?'`,
    }
    // help or don't help
    
    // "help-1": `'I will help you,' ${user_name} said, sounding more confident than anticipated, 'Brian said you are searching for a cure?'.`,
    // "help-2": `'Yes, I heard of a witch who made us this way,' Toby glared menacingly out toward the dark night, 'She wouldn't be foolish enough to infect us all without a backup plan. Have you found any potions on your travels?'`,
    // "has-potions": `${user_name} reached inside ${pronoun_their} jacket, pulling out the flask from the laboratory. 'Yes,' ${pronoun_they} announced, 'Are you sure this is the cure?'.`,
    // "has-potions-2": `Toby laughed, a deep and booming laugh, 'Well, it is you that will take the first drink, so you're going to find out!'`,
    // "has-potions-3": `'Well, what are you waiting for?' Toby looked on in suspense, waiting for ${user_name} to drink from the flask.`,
    // "toby-blue-1": `Knowing there is no other choice, no way to avoid this fate, ${user_name} raises the flask to ${pronoun_their} lips, closes ${pronoun_their} eyes, and swigs a mouthful.`,
    // "toby-blue-2": `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${user_name} was cured!`,
    // "toby-blue-3": `${pronoun_they} passed the drink to Toby and waited for him to drink to his health. The warm blood rushed to his cheeks as he shared the cure around the others.`,
    // "toby-blue-4": `${user_name} and Toby left the cave, leading the other former zombies out into the light, clear-headed and focused, ${pronoun_they} found ${pronoun_their} way back to civilisation. Back to humanity.`,
    // "toby-red-1": `Knowing there is no other choice, no way to avoid this fate, ${user_name} lifted the bubbling broth to ${pronoun_their} lips.`,
    // "a-toby-red-2": `If ${pronoun_their} sense of smell still worked, ${pronoun_they} would have been overcome with a putrid odour of stale blood, sulphur, and a hint of petrol.`,
    // "toby-red-3": `Hoping for the best, ${user_name} poured the mixture down ${pronoun_their} throat.`,
    // "k-toby-red-4": `It gurgled as it reached ${pronoun_their} stomach. ${user_name} was overcome with drowsiness, ${pronoun_their} eyes grew heavy and ${pronoun_they} slumped to the floor.`,
    // "a-toby-red-4": `${user_name} wretched as the liquid bubbled ferociously, ${pronoun_their} insides burned. It was a mistake. ${pronoun_their} stomach churned, heat exploded within ${pronoun_them}, and then...`,
    // "a-toby-red-5" : `BANG! ${user_name}'s gooey insides exploded all over the cave`,
    // "toby-purple": `Knowing there is no other choice, no way to avoid this fate, ${user_name} raised the glowing liquid, gazing at its beautiful colour. Closing ${pronoun_their} eyes, ${user_name} tilted ${pronoun_their} head back and downed the strange concoction in one large gulp.`,
    // "toby-purple-2": `A warmth flooded through ${pronoun_them}. ${pronoun_they} drank the entire potion. Toby cried out in anger... but ${user_name} didn't care.`,
    // "toby-purple-3": `${pronoun_they} were absolutely overcome with love for Toby. Toby was perfect to ${pronoun_them}, in every way. ${pronoun_they} sat down next to Toby and told him everything would be OK, ${pronoun_they} had each other... and love was all that mattered.`,
    // "toby-purple-4": `The torchlight eventually dimmed, the sound of zombies stomping around and around finally silenced, and ${user_name} was never seen again.`,
    // "no-potions": `${user_name} shuffled ${pronoun_their} feet awkwardly, looking down at the floor. 'I have not, I will go back through the forest and find this cure for us both' ${pronoun_they} declared, and headed off back to where ${pronoun_they} began.`,
    // "back-2": `${user_name} trudged slowly back into the forest, finally making ${pronoun_their} way back to Toby and his horde.`,
    // "no-help": `Not knowing what this could lead to, ${user_name} tried to decline. As ${pronoun_they} turned to leave the cave, Toby called to his zombie followers, 'Don't let ${user_name} leave. For this act against us all, we shall get our revenge.'`,
    // "k-no-help-2": `He pointed to the back of the cave. The zombies stopped ${pronoun_their} circles and picked ${user_name} up, carrying ${pronoun_them} to the back of the cave, never to be seen again...`,
    // "a-no-help-2": `He pointed to the back of the cave. A bathtub sat over a fire, brown liquid frothing inside. 'To the coffee bath!' Toby cried.`,
    // "a-no-help-3": `The zombies stopped ${pronoun_their} circles and grabbed hold of ${user_name}, carrying ${pronoun_them} to the bath. ${pronoun_they} threw ${pronoun_them} in and jeered and groaned as ${user_name}'s mushy body melted in the hot coffee pot.`,
    // "k-refuse": `${user_name} didn't like the sound of a zombie king. ${pronoun_they} took ${pronoun_their} chances and turned to the trees and walked on... and on... and on... Never to be seen again.`,
    
}


// ! tested and working. Needs applying properly, but forms basics of logic.
// ! uncomment and test with different name, running checkAvatar(boy/girl) and adult = true :)
// const pages = Array.from(Object.keys(story));

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
