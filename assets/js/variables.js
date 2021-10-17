// ----------------------------------------------------------------  Variables

let pronoun_their = "their";
let pronoun_them = "them";
let pronoun_they = "they";
let zombieKingVisited = "kingNotSeen"; // kingSeen
let age = "child";
let userName = "Zebedee";
let storyEnd = false;
let drinkColor = "";
let hasDrink = false;
let userInputRequired = false;

// ---------------------------------------------------------------- Page control

const currentPage = document.getElementsByClassName("page current")[0];
const waitingPage = document.getElementsByClassName("page waiting")[0];



const container = {
  eastWest: document.getElementById("east-west-container"),
  consumeCollect: document.getElementById("consume-collect-container"),
  redPurpleBlue: document.getElementById("red-purple-blue-container"),
  feedNoFeed: document.getElementById("feed-no-feed-container"),
  continueFlee: document.getElementById("continue-feed-container"),
  helpNoHelp: document.getElementById("help-no-help-container"),
}

const choiceButtons = {
  east: document.getElementById("east-btn"),
  west: document.getElementById("west-btn"),
  consume: document.getElementById("consume-btn"),
  collect: document.getElementById("collect-btn"),
  red: document.getElementById("red-btn"),
  purple: document.getElementById("purple-btn"),
  blue: document.getElementById("blue-btn"),
  feed: document.getElementById("feed-btn"),
  noFeed: document.getElementById("no-feed-btn"),
  continue: document.getElementById("continue-btn"),
  flee: document.getElementById("flee-btn"),
  help: document.getElementById("help-btn"),
  noHelp: document.getElementById("no-help-btn"),
}

// ---------------------------------------------------------------- Image control

const staticImage = document.getElementById("content-image");
