const choices = {
  adult: {
    one: "Swearing and shit",
    two: "some more stuff",
    three: ""
  },
  child: {
    one: "polite and no nasty stuff",
    two: "some extra polite",
    three: "hint "
  }
}

let adult = false;
let age = choices.child;

if (adult) {
  age = choices.adult;
}

const story = {
  line1: "Hello World!",
  line2: `This is a test ${age.one}`,
  line3: `Another test with ${age.two}`,
  line4: `A blank string ${age.three}test`
}


console.log(story.line2);
console.log(story.line3);
console.log(story.line4);
