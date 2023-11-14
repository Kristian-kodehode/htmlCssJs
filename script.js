const sidesLeft = document.querySelector(".sides-left");
const sidesRight = document.querySelector(".sides-right");
const descriptiontext = document.querySelector(".descriptiontext");

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

sidesLeft.addEventListener("click", eventHandlerLeft);
sidesRight.addEventListener("click", eventHandlerRight);
