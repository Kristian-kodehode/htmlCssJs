const sidesLeft = document.querySelector(".sides-left");
const sidesRight = document.querySelector(".sides-right");
const descriptiontext = document.querySelector(".descriptiontext");
const resetbutton = document.querySelector(".resetbutton");

const eventHandlerLeft = () => {
  console.log("Left Side clicked");
  if (window.innerWidth > 1080) {
    sidesLeft.style.width = "95%";
    sidesRight.style.width = "5%";
  } else {
    sidesLeft.style.height = "95%";
    sidesRight.style.height = "5%";
  }
};

const eventHandlerRight = () => {
  console.log("Right Side clicked");
  if (window.innerWidth > 1080) {
    sidesLeft.style.width = "5%";
    sidesRight.style.width = "95%";
  } else {
    sidesLeft.style.height = "5%";
    sidesRight.style.height = "95%";
  }
};

const resetEvents = () => {
  if (window.innerWidth > 1080) {
    sidesLeft.style.width = "50%";
    sidesLeft.style.height = "100v%";

    sidesRight.style.width = "50%";
    sidesRight.style.height = "100v%";
  } else {
    sidesLeft.style.width = "100%";
    sidesLeft.style.height = "50%";
    sidesRight.style.width = "100%";
    sidesRight.style.height = "50%";
  }
  console.log("Reset button clicked");
};

sidesLeft.addEventListener("click", eventHandlerLeft);
sidesRight.addEventListener("click", eventHandlerRight);
resetbutton.addEventListener("click", resetEvents);
