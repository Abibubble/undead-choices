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

function startStory() {
    document.getElementById("story-text").innerText = story.begin;
}

function checkAge(age) {
    if (age == "adult") {
        adult = true;
    } else {
        adult = false;
    }
    document.getElementById("age-modal").classList.add("hide");
    startStory();
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

const story = {
    "begin": "The wind whistles through the trees, creepy crawlies scurry around the undergrowth, a wolf howls in the distance.",
    "moon": "Under the full moon, in the depths of the forest, a human-like creature looks around. Not sure of how it got here, not sure where 'here' even is!",
    "name": "It knows its hands are cold, in fact, everything is cold, down to its blood and bones. It knows one more thing - its name...",
    "avatar": `${user_name} hunched down. Staring into a murky puddle, ${pronoun_their} reflection can just about be seen...`,
    "riband": `A blue Riband chocolate bar fell out of ${pronoun_their} pocket. Overcome with hunger, ${pronoun_they} tried to eat it... but it did nothing for ${pronoun_them}. ${user_name} wanted something different, something new... something... human! BRAINS!`,
    "zombie": `${user_name} stumbled forward as ${pronoun_they} realised what ${pronoun_they} had become, ${pronoun_they} were... A zombie! With this daunting realisation, ${user_name} set off in search of some succulent grey matter to feed on...`,
    "east": `${user_name} headed west, ambling through the forest, ${pronoun_their} feet heavy and clumsy. ${pronoun_they} stepped heavily on a branch, breaking it with a loud CRACK.`,
    "a-maltesers": `The splintered stake plunged through ${user_name}'s soft flesh with a squelch. ${user_name} looked down to see a packet of Maltesers too, obliterated in ${pronoun_their} red packaging. ${pronoun_they} wouldn't be any good. Undeterred, ${pronoun_they} continued.`,
    "k-maltesers": `${user_name} looked down to see a packet of Maltesers too, obliterated in ${pronoun_their} red packaging. ${pronoun_they} wouldn't be any good.`,
    "ci-lab": `As the edge of the forest grew nearer, a large, industrial building loomed ahead. ${user_name} approached, a tattered sign read 'CI Chemical Laboratory'. The remnants of an orange circular logo glimmered in the moonlight.`,
    "twirl": `${user_name} clambered over some old barrels toward a slightly open door. A tatty heart-shaped box lay on the floor. It appeared to have a Twirl inside it, the purple wrapper just sticking out. No need for more chocolate!`,
    "brambles": `Thick brambles grew into the door frame, ${user_name} pried it open with a loud creak. Inside, down a dark and eery corridor, ${user_name} came to a dimly lit room.`,
    "flasks": `Rotten pumpkins sat in the corner, rats nibbling at the remains. On a table in the middle of the room, there stood three pristine glass flasks...`,
    "table": `${user_name} groaned as ${pronoun_they} lurched toward the table. The rats in the corner scuttled away into the cracks in the walls.`,
    "potions": `A bright purple liquid glowed in the first flask; a deep, blood-red broth sat bubbling in the second; and a shimmering blue goo gurgled in the third.`,
    "k-chem-help": `As ${user_name} reached forward, the chocolate bar wrapper fell from ${pronoun_their} pocket as ${pronoun_they} tentatively selected a drink...`,
    "a-drink-red-1": `${user_name} lifted the bubbling broth to ${pronoun_their} lips. If ${pronoun_their} sense of smell still worked, ${pronoun_they} would have been overcome with a putrid odour of stale blood, sulphur, and a hint of petrol.`,
    "k-drink-red-1": `${user_name} lifted the bubbling broth to ${pronoun_their} lips. Hoping for the best, ${user_name} poured the mixture down ${pronoun_their} throat.`,
    "k-drink-red-2": `It gurgled as it reached ${pronoun_their} stomach. ${user_name} was overcome with drowsiness, ${pronoun_their} eyes grew heavy and ${pronoun_they} slumped to the floor...`,
    "drink-purple-1": `${user_name} wretched as the liquid bubbled ferociously, ${pronoun_their} insides burned. It was a mistake. ${pronoun_their} stomach churned, heat exploded within ${pronoun_them}, and then... BANG. ${user_name}'s gooey insides exploded all over the room!`,
    "drink-purple-2": `A warmth flooded through ${pronoun_them}. ${user_name} heard a clattering from the next room and crept over to investigate. Inside, sweeping with an old tattered broom, a witch looked back at ${user_name}. Overcome with adoration, ${pronoun_they} staggered forward.`,
    "drink-purple-3": `The witch announced her name, Jinx. ${user_name} fell deeply in love with Jinx immediately, as the wicked witch enticed ${pronoun_them} over to a cage in the corner. She ushered ${user_name} inside, locked the door and that was the last time ${user_name} was ever seen...`,
    "drink-blue-1": `${user_name} slowly picked up the gleaming blue brew. ${pronoun_their} hand trembled as ${pronoun_they} brought it to ${pronoun_their} mouth. Slowly, ${user_name} began to sip from the flask.`,
    "a-drink-blue-2": `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${user_name} was cured! Pain seared from ${pronoun_their} foot, but the pain was welcomed... ${user_name} knew ${pronoun_they} were human once again!`,
    "k-drink-blue-2": `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${user_name} was cured!`,
    "collect": `${user_name} reached forward to collect a concoction and continued on ${pronoun_their} quest...`,
    "a-leave": `${user_name} headed back toward the entrance of the laboratory. ${pronoun_they} stowed the flask inside a pocket of ${pronoun_their} jacket for safekeeping. (It was pressed a little too tightly against ${pronoun_their} body, ${pronoun_they} heard a rib crack under the extra pressure.)`,
    "k-leave": `${user_name} headed back toward the entrance of the laboratory. ${pronoun_they} stowed the flask inside a pocket of ${pronoun_their} jacket for safekeeping.`,
    "back": `${user_name} trudged slowly back into the forest, coming back to where ${pronoun_they} began ${pronoun_their} journey.`,
    "west": `Lumbering on through the tall trees, ${user_name} felt a chill as ${pronoun_they} approached a clearing. Stood in the middle, 10ft tall, a snowman leered toward ${user_name}.`,
    "brian": `'Mmmrrroohahg' it groaned, 'Mmmmrrr I am Brian... zombie o'greedy!'. As the snowman murmured his introduction, ${user_name} could see this was no ordinary snowman.`,
    "a-brian-2": `Beneath a dark pair of sunglasses, glowing red eyes could be seen. Green goo oozed from its neck, one stick of an arm was broken halfway. The top of his head had melted away, exposing a pulsating mass of blue gunk - was that a brain?`,
    "brian-3": `This was a zombie snowman! Should ${user_name} try and feed on this creature's brains?`,
    "feed": `Stood on the edge of the clearing, ${user_name} beckoned the snowman over to ${pronoun_them}. Brian rolled forward toward ${user_name}. Its lower body section seemingly separate, like a wheel, allowing him to stay upright.`,
    "feed-2": `As he slowed to a stop, ${user_name} clambered up the nearest tree. Crawling along a branch, when Brian stood just below, ${user_name} dropped onto his head. As ${user_name} tried to take a bite into the snowman's head, ${pronoun_they} were very glad ${pronoun_their} sense of taste had failed.`,
    "k-feed-3": `Brian roared in anger! He flung ${user_name} to the ground and rolled on top of ${pronoun_them}. 'For your crime against me, you will remain under me, forever!' Brian bellowed... ${user_name} was never seen again`,
    "a-feed-3": `Brian roared in anger! He flung ${user_name} to the ground, leaning over ${pronoun_them}, green goo dripping on top of ${user_name}'s head.`,
    "a-feed-4": `Brian grinned an evil grin. 'I am Brian, zombie O'Greedy! I will not be eaten by a puny human zombie... I will feast upon you!' he roared. And with that, he ripped poor ${user_name} limb from limb as he devoured ${pronoun_their} soft, fleshy carcass.`,
    "no-feed": `Using what is left of ${pronoun_their} logic, ${user_name} decides it best not to take on a 10ft snowman zombie and greets Brian instead.`,
    "no-feed-2": `'Hello, I am ${user_name},' ${user_name} calls out, 'I mean you no harm, can you help me?'. An eery howl can be heard in the distance. Brian trundles toward ${user_name}.`,
    "no-feed-3": `'You look pale,' Brian groans, 'You must be one of Toby's creeps... He is the king of all zombies!! I hear he is looking for the cure, perhaps you can help him'.`,
    "no-feed-4": `The giant snowman waves an arm vaguely to the south, 'Head that way, you will find him soon enough.'`,
    "to-king": `${user_name} heads toward the south. The trees seem to be more twisted now. An owl sits up high, hooting. A dull and rhythmic thudding gets louder as ${user_name} stomps toward a cave.`,
    "a-to-king-2": `The glow of a firey torch illuminates the cave entrance. A horde of zombies marches mindlessly in circles. A couple of zombies sit off to one side, boiling something in a pan. Another is using its own bloody finger to paint on the cave wall.`,
    "k-to-king-2": `The glow of a firey torch illuminates the cave entrance. A horde of zombies marches mindlessly in circles. A couple of zombies sit off to one side, boiling something in a pan.`,
    "toby": `'Welcome, ${user_name}, I am Toby... King of the Zombies!' a loud and powerful voice echoes, 'I am fed up with these imbeciles, look at those two trying to make rice! What use is that to our kind? Especially when it's so burnt?!'`,
    "toby-2": `${user_name} sees a grand-looking figure gesturing to the couple by the cave entrance. His eyes are piercing ice white, his stocky frame looks less squidgy than the other zombies. A regal necklace surrounds his collar and a jewelled crown sits atop his head.`,
    "toby-3": `Truly, he is the King. ${user_name} groans as ${pronoun_they} walk toward this mighty zombie. 'How did you know my name?' ${user_name} asks with a quivering, croaky voice.`,
    "toby-4": `'I know all zombies!' Toby replies, 'Now... Are you here to help me?'`,
    "help-1": `'I will help you,' ${user_name} said, sounding more confident than anticipated, 'Brian said you are searching for a cure?'.`,
    "help-2": `'Yes, I heard of a witch who made us this way,' Toby glared menacingly out toward the dark night, 'She wouldn't be foolish enough to infect us all without a backup plan. Have you found any potions on your travels?'`,
    "has-potions": `${user_name} reached inside ${pronoun_their} jacket, pulling out the flask from the laboratory. 'Yes,' ${pronoun_they} announced, 'Are you sure this is the cure?'.`,
    "has-potions-2": `Toby laughed, a deep and booming laugh, 'Well, it is you that will take the first drink, so you're going to find out!'`,
    "has-potions-3": `'Well, what are you waiting for?' Toby looked on in suspense, waiting for ${user_name} to drink from the flask.`,
    "toby-blue-1": `Knowing there is no other choice, no way to avoid this fate, ${user_name} raises the flask to ${pronoun_their} lips, closes ${pronoun_their} eyes, and swigs a mouthful.`,
    "toby-blue-2": `A cool sensation flowed down ${pronoun_their} throat, into ${pronoun_their} belly, and beyond. Followed by a tingling and warmth. The hunger began to fade, ${pronoun_their} hands felt human again...${user_name} was cured!`,
    "toby-blue-3": `${pronoun_they} passed the drink to Toby and waited for him to drink to his health. The warm blood rushed to his cheeks as he shared the cure around the others.`,
    "toby-blue-4": `${user_name} and Toby left the cave, leading the other former zombies out into the light, clear-headed and focused, ${pronoun_they} found ${pronoun_their} way back to civilisation. Back to humanity.`,
    "toby-red-1": `Knowing there is no other choice, no way to avoid this fate, ${user_name} lifted the bubbling broth to ${pronoun_their} lips.`,
    "a-toby-red-2": `If ${pronoun_their} sense of smell still worked, ${pronoun_they} would have been overcome with a putrid odour of stale blood, sulphur, and a hint of petrol.`,
    "toby-red-3": `Hoping for the best, ${user_name} poured the mixture down ${pronoun_their} throat.`,
    "k-toby-red-4": `It gurgled as it reached ${pronoun_their} stomach. ${user_name} was overcome with drowsiness, ${pronoun_their} eyes grew heavy and ${pronoun_they} slumped to the floor.`,
    "a-toby-red-4": `${user_name} wretched as the liquid bubbled ferociously, ${pronoun_their} insides burned. It was a mistake. ${pronoun_their} stomach churned, heat exploded within ${pronoun_them}, and then...`,
    "a-toby-red-5" : `BANG! ${user_name}'s gooey insides exploded all over the cave`,
    "toby-purple": `Knowing there is no other choice, no way to avoid this fate, ${user_name} raised the glowing liquid, gazing at its beautiful colour. Closing ${pronoun_their} eyes, ${user_name} tilted ${pronoun_their} head back and downed the strange concoction in one large gulp.`,
    "toby-purple-2": `A warmth flooded through ${pronoun_them}. ${pronoun_they} drank the entire potion. Toby cried out in anger... but ${user_name} didn't care.`,
    "toby-purple-3": `${pronoun_they} were absolutely overcome with love for Toby. Toby was perfect to ${pronoun_them}, in every way. ${pronoun_they} sat down next to Toby and told him everything would be OK, ${pronoun_they} had each other... and love was all that mattered.`,
    "toby-purple-4": `The torchlight eventually dimmed, the sound of zombies stomping around and around finally silenced, and ${user_name} was never seen again.`,
    "no-potions": `${user_name} shuffled ${pronoun_their} feet awkwardly, looking down at the floor. 'I have not, I will go back through the forest and find this cure for us both' ${pronoun_they} declared, and headed off back to where ${pronoun_they} began.`,
    "back-2": `${user_name} trudged slowly back into the forest, finally making ${pronoun_their} way back to Toby and his horde.`,
    "no-help": `Not knowing what this could lead to, ${user_name} tried to decline. As ${pronoun_they} turned to leave the cave, Toby called to his zombie followers, 'Don't let ${user_name} leave. For this act against us all, we shall get our revenge.'`,
    "k-no-help-2": `He pointed to the back of the cave. The zombies stopped ${pronoun_their} circles and picked ${user_name} up, carrying ${pronoun_them} to the back of the cave, never to be seen again...`,
    "a-no-help-2": `He pointed to the back of the cave. A bathtub sat over a fire, brown liquid frothing inside. 'To the coffee bath!' Toby cried.`,
    "a-no-help-3": `The zombies stopped ${pronoun_their} circles and grabbed hold of ${user_name}, carrying ${pronoun_them} to the bath. ${pronoun_they} threw ${pronoun_them} in and jeered and groaned as ${user_name}'s mushy body melted in the hot coffee pot.`,
    "k-refuse": `${user_name} didn't like the sound of a zombie king. ${pronoun_they} took ${pronoun_their} chances and turned to the trees and walked on... and on... and on... Never to be seen again.`,
    "a-refuse": `${user_name} didn't like the sound of a zombie king. ${pronoun_they} took ${pronoun_their} chances and turned to the trees and walked on... and on... and on...`,
    "a-refuse-2": `Toby, the King of Zombies, watched from a distant hilltop as ${user_name} walked into the trees. He sighed, resigned to losing another potential helper.`,
    "a-refuse-3": `He picked up the Porter's X2 RayGun that lay on the ground beside him, passing it to a very large zombie. 'Take ${pronoun_them} out' he declared. The zombie nodded, aimed, and fired. 'BOOM! Headshot!' the zombie laughed.`,
}
