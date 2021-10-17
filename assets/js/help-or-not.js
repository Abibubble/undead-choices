/**
 * show buttons and add event listeners
 */
 function showHelpOrNot() {
  // staticImage.appendChild(contentImage); //move to switch case for every page/para
  containerObj.helpNoHelp.classList.remove("hide");
  choiceButtonsObj.help.addEventListener("click", chooseHelp);
  choiceButtonsObj.noHelp.addEventListener("click", chooseNoHelp);
}

/**
 * hide buttons and remove event listeners
 */
function hideHelpOrNot() {
  choiceButtonsObj.help.removeEventListener("click", chooseHelp);
  choiceButtonsObj.noHelp.removeEventListener("click", chooseNoHelp);
  containerObj.helpNoHelp.classList.add("hide");
}

function chooseHelp() {
  hideInputs();
  goToPage(18);
}

function chooseNoHelp() {
  hideInputs();
  goToPage(24);
}