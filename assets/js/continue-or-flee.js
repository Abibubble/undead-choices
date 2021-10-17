/**
 * show buttons and add event listeners
 */
 function showContinueOrFlee() {
  // staticImage.appendChild(contentImage); //move to switch case for every page/para
  containerObj.continueFlee.classList.remove("hide");
  choiceButtonsObj.continue.addEventListener("click", chooseContinue);
  choiceButtonsObj.flee.addEventListener("click", chooseFlee);
}

/**
 * hide buttons and remove event listeners
 */
function hideContinueOrFlee() {
  choiceButtonsObj.continue.removeEventListener("click", chooseContinue);
  choiceButtonsObj.flee.removeEventListener("click", chooseFlee);
  containerObj.continueFlee.classList.add("hide");
}

function chooseContinue() {
  hideInputs();
  goToPage(17);
}

function chooseFlee() {
  hideInputs();
  goToPage(16);
}