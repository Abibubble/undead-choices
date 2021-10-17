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

function chooseConsume() {
  showDrinks("consume");
}

function chooseCollect() {
  showDrinks("collect");
}

function showDrinks(drinkOrNot) {
  hideInputs();
  containerObj.redPurpleBlue.classList.remove("hide");
  if (drinkOrNot === "consume") {
    choiceButtonsObj.red.addEventListener("click", consumeRed);
    choiceButtonsObj.purple.addEventListener("click", consumePurple);
    choiceButtonsObj.blue.addEventListener("click", consumeBlue);
  } else {
    choiceButtonsObj.red.addEventListener("click", collectRed);
    choiceButtonsObj.purple.addEventListener("click", collectRed);
    choiceButtonsObj.blue.addEventListener("click", collectRed);
  }
}

function consumeRed() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(9)
  } else {
    goToPage(21);
  }
}

function consumePurple() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(10)
  } else {
    goToPage(22);
  }
}

function consumeBlue() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(11)
  } else {
    goToPage(20);
  }
}

function collectRed() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(19)
  } else {
    drinkColor = "red";
    goToPage(12);
  }
}

function collectPurple() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(12)
  } else {
    drinkColor = "purple";
    goToPage(19);
  }
}

function collectBlue() {
  hideInputs();
  if (zombieKingVisited === "kingNotSeen") {
    goToPage(12)
  } else {
    drinkColor = "blue";
    goToPage(19);
  }
}