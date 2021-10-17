// ------------------------------ Age setup

function checkAge() {
  age = this.id;
  if (this.id === "child" && music){
    playSoundEffect("giggle");
  }
  document.getElementById("age-modal").classList.add("hide");
}

document.querySelectorAll(".modal-btn").forEach(btn => {
  btn.addEventListener("click", checkAge);
});