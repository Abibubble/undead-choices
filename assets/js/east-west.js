/**
 * show buttons and add event listeners
 */
function showEastWest() {
  // staticImage.appendChild(contentImage); //move to switch case for every page/para
  containerObj.eastWest.classList.remove("hide");
  choiceButtonsObj.east.addEventListener("click", chooseEast);
  choiceButtonsObj.west.addEventListener("click", chooseWest);
}

/**
 * hide buttons and remove event listeners
 */
function hideEastWest() {
  choiceButtonsObj.east.removeEventListener("click", chooseEast);
  choiceButtonsObj.west.removeEventListener("click", chooseWest);
  containerObj.eastWest.classList.add("hide");
}

function chooseEast() {
  hideInputs();
  goToPage(4);
}

function chooseWest() {
  hideInputs();
  goToPage(13);
}
