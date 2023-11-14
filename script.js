const sidesLeft = document.querySelector(".sides-left");
const sidesRight = document.querySelector(".sides-right");

const eventHandlerLeft = () => {
  console.log("Left Side clicked");
  (sidesLeft.style.width = "95%") && (sidesRight.style.width = "5%");
};

const eventHandlerRight = () => {
  console.log("Right Side clicked");
  (sidesLeft.style.width = "5%") && (sidesRight.style.width = "95%");
};

sidesLeft.addEventListener("click", eventHandlerLeft);
sidesRight.addEventListener("click", eventHandlerRight);
