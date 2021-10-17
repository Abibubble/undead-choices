/**
 * show buttons and add event listeners
 */
 function showFeedNoFeed() {
  // staticImage.appendChild(contentImage); //move to switch case for every page/para
  containerObj.feedNoFeed.classList.remove("hide");
  choiceButtonsObj.feed.addEventListener("click", chooseFeed);
  choiceButtonsObj.noFeed.addEventListener("click", chooseNoFeed);
}

/**
 * hide buttons and remove event listeners
 */
function hideFeedNoFeed() {
  choiceButtonsObj.feed.removeEventListener("click", chooseFeed);
  choiceButtonsObj.noFeed.removeEventListener("click", chooseNoFeed);
  containerObj.feedNoFeed.classList.add("hide");
}

function chooseFeed() {
  hideInputs();
  goToPage(14);
}

function chooseNoFeed() {
  hideInputs();
  goToPage(15);
}