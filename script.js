const sidesLeft = document.getElementsByClassName("sides-left")[0];
const sidesRight = document.getElementsByClassName("sides-right")[0];

const eventHandlerLeft = () => {
  console.log("Left Side clicked");
};
const eventHandlerRight = () => {
  console.log("Right Side clicked");
};

sidesLeft.addEventListener("click", eventHandlerLeft);
sidesRight.addEventListener("click", eventHandlerRight);
