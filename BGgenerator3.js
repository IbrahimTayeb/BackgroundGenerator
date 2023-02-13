const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
const generateButton = document.querySelector("#generate-button");
const backgroundContainer = document.querySelector("#background-container");

generateButton.addEventListener("click", function() {
  backgroundContainer.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
});
