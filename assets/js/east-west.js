const compass = new Image();
compass.src = "assets/img/east-west/compass.webp";

/**
 * show buttons and add event listeners
 */
function showEastWest() {
  staticImage.appendChild(compass); //move to switch case for every page/para
  container.eastWest.classList.remove("hide");
  choiceButtons.east.addEventListener("click", chooseEast());
  choiceButtons.west.addEventListener("click", chooseWest());
}

/**
 * hide buttons and remove event listeners
 */
function hideEastWest() {
  container.eastWest.classList.add("hide");
  choiceButtons.east.removeEventListener("click", chooseEast());
  choiceButtons.west.removeEventListener("click", chooseWest());
}

function chooseEast() {
  console.log("EAST");
}

function chooseWest() {
  console.log("WEST");
}
