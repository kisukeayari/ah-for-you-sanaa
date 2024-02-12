const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

let isNoButtonDisabled = false;

noButton.addEventListener("click", (event) => {
  if (isNoButtonDisabled) {
    event.preventDefault();
    return;
  }

  noButton.disabled = true;
  yesButton.disabled = false;
  isNoButtonDisabled = true;

  noButton.style.position = "absolute";
  noButton.style.left = `${Math.random() * window.innerWidth}px`;
  noButton.style.top = `${Math.random() * window.innerHeight}px`;
});

document.addEventListener("mousemove", (event) => {
  if (isNoButtonDisabled) {
    noButton.style.left = `${event.pageX}px`;
    noButton.style.top = `${event.pageY}px`;
  }
});