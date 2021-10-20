/**
 * show buttons and add event listeners
 */
 function showConsumeCollect() {
  // staticImage.appendChild(contentImage); //move to switch case for every page/para
  containerObj.consumeCollect.classList.remove("hide");
  choiceButtonsObj.consume.addEventListener("click", chooseConsume);
  choiceButtonsObj.collect.addEventListener("click", chooseCollect);
}

/**
 * hide buttons and remove event listeners
 */
function hideConsumeCollect() {
  choiceButtonsObj.consume.removeEventListener("click", chooseEast);
  choiceButtonsObj.collect.removeEventListener("click", chooseWest);
  containerObj.consumeCollect.classList.add("hide");
}

/**
 * hide buttons and remove event listeners
 */
function hideDrinks() {
  choiceButtonsObj.red.removeEventListener("click", collectRed);
  choiceButtonsObj.purple.removeEventListener("click", collectRed);
  choiceButtonsObj.blue.removeEventListener("click", collectRed);
  choiceButtonsObj.red.removeEventListener("click", consumeRed);
  choiceButtonsObj.purple.removeEventListener("click", consumeRed);
  choiceButtonsObj.blue.removeEventListener("click", consumeRed);
  containerObj.redPurpleBlue.classList.add("hide");
}

function chooseConsume() {
  hideInputs();
  goToPage(8);
}

function chooseCollect() {
  collectDrink = true;
  hideInputs();
  goToPage(12);
}

function showDrinks() {
  containerObj.redPurpleBlue.classList.remove("hide");
  if (collectDrink) {
    choiceButtonsObj.red.addEventListener("click", collectRed);
    choiceButtonsObj.purple.addEventListener("click", collectPurple);
    choiceButtonsObj.blue.addEventListener("click", collectBlue);
  } else {
    choiceButtonsObj.red.addEventListener("click", consumeRed);
    choiceButtonsObj.purple.addEventListener("click", consumePurple);
    choiceButtonsObj.blue.addEventListener("click", consumeBlue);
  }
}

function consumeRed() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(9);
  } else {
    goToPage(21);
  }
}

function consumePurple() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(10);
  } else {
    goToPage(22);
  }
}

function consumeBlue() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(11);
  } else {
    goToPage(20);
  }
}

function collectRed() {
  hideInputs();
  hasDrink = true;
  drinkColor = "red";
  statImg.src = "assets/img/content-images/chem-in-hand.webp";
  staticImage.appendChild(statImg);
}

function collectPurple() {
  hideInputs();
  hasDrink = true;
  drinkColor = "purple";
  statImg.src = "assets/img/content-images/chem-in-hand.webp";
  staticImage.appendChild(statImg);
}

function collectBlue() {
  hideInputs();
  hasDrink = true;
  drinkColor = "blue";
  statImg.src = "assets/img/content-images/chem-in-hand.webp";
  staticImage.appendChild(statImg);
}