// ---------------------------------------------------------------- Reset all

function reset() {
  pronoun_their = "their";
  pronoun_them = "them";
  pronoun_they = "they";
  zombieKingVisited = "kingNotSeen"; // kingSeen
  age = "child";
  userName = "Zebedee";
  storyEnd = false;
  drinkColor = "";
  hasDrink = false;
  pageNumber = 0;
  paraNumber = 1;
  nextPage();
  updateProgressBar(4);
  gravestone.classList.add("hide");
  heart.classList.add("hide");
  potion.classList.add("hide");
}