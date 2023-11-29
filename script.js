const sidesLeft = document.querySelector(".sides-left");
const sidesRight = document.querySelector(".sides-right");
const imageContainerLeft = document.querySelector(".imagecontainer-left");
const imageContainerRight = document.querySelector(".imagecontainer-right");
const descriptiontext = document.querySelector(".descriptiontext");
const resetbutton = document.querySelector(".resetbutton");

// const handleWindowResize = () => {
//   resetEvents();
// };

// window.addEventListener("resize", handleWindowResize);

let isWindowAboveThreshold = window.innerWidth > 1080;

const handleWindowResize = () => {
  const isNowAboveThreshold = window.innerWidth > 1080;

  // Check if the window has crossed the 1080px threshold
  if (isNowAboveThreshold !== isWindowAboveThreshold) {
    resetEvents();
    isWindowAboveThreshold = isNowAboveThreshold;
  }
};

// Add an event listener for window resize
window.addEventListener("resize", handleWindowResize);

const eventHandlerLeft = () => {
  console.log("Left Side clicked");
  if (window.innerWidth > 1080) {
    sidesLeft.style.width = "95%";
    sidesRight.style.width = "5%";
    sidesLeft.style.overflowY = "scroll";
    sidesRight.style.overflowY = "hidden";
    imageContainerRight.style.display = "none";
    imageContainerLeft.style.display = "block";
  } else {
    sidesLeft.style.height = "95%";
    sidesRight.style.height = "5%";
    sidesLeft.style.overflowY = "scroll";
    sidesRight.style.overflowY = "hidden";
    imageContainerRight.style.display = "none";
    imageContainerLeft.style.display = "block";
  }
};

const eventHandlerRight = () => {
  console.log("Right Side clicked");
  if (window.innerWidth > 1080) {
    sidesLeft.style.width = "5%";
    sidesRight.style.width = "95%";
    sidesRight.style.overflowY = "scroll";
    sidesLeft.style.overflowY = "hidden";
    imageContainerRight.style.display = "block";
    imageContainerLeft.style.display = "none";
  } else {
    sidesLeft.style.height = "5%";
    sidesRight.style.height = "95%";
    sidesRight.style.overflowY = "scroll";
    sidesLeft.style.overflowY = "hidden";
    imageContainerRight.style.display = "block";
    imageContainerLeft.style.display = "none";
  }
};

const resetEvents = () => {
  const isLargeScreen = window.innerWidth > 1080;

  sidesRight.style.overflowY = "hidden";
  sidesLeft.style.overflowY = "hidden";

  imageContainerLeft.style.display = "none";
  imageContainerRight.style.display = "none";

  sidesLeft.style.width = isLargeScreen ? "50%" : "100%";
  sidesLeft.style.height = isLargeScreen ? "100%" : "50%";

  sidesRight.style.width = isLargeScreen ? "50%" : "100%";
  sidesRight.style.height = isLargeScreen ? "100%" : "50%";
};

sidesLeft.addEventListener("click", eventHandlerLeft);
sidesRight.addEventListener("click", eventHandlerRight);
resetbutton.addEventListener("click", resetEvents);
