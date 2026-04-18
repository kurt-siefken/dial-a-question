
const hat = document.getElementById("hat-image");
const sceneDisplay = document.getElementById("scene-card");
const changehat = document.getElementById("change-hat");
const hatimage = document.getElementById("hat-image");
let deck = [];




///////////////////////
// Shake the hat
///////////////////////
function shakeHat() {
  hat.classList.add("shaking");

  setTimeout(() => {
    hat.classList.remove("shaking");
    const scene = getRandomScene(scenes);
    sceneDisplay.style.setProperty("--rotate", getRandomRotation());
    sceneDisplay.textContent = scene;
    sceneDisplay.classList.add("show");
  }, 1000);
}


///////////////////////
// Shake the hat listener
///////////////////////
hat.addEventListener("click", () => {
  sceneDisplay.classList.remove("show");
  shakeHat();
});



///////////////////////
// Gets random degree to tilt the scene
///////////////////////
function getRandomRotation() {
  return (Math.random() * 6 - 3).toFixed(2) + "deg"; // -2 to 2
}


///////////////////////
// Gets the next random scene
///////////////////////
function getRandomScene(list) {
  if (deck.length === 0) {
    deck = shuffle(scenes);
  }

  return deck.pop();
}


///////////////////////
// Picks random scene, assuming it hasn't been picked yet
///////////////////////
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}






///////////////////////
// Change hat listener
///////////////////////
changehat.addEventListener("click", () => {
  hatimage.setAttribute("src", getNewHat());
});

function getNewHat() {
  const currentSrc = hatimage.getAttribute("src");

  let newHat;

  do {
    newHat = listofhats[Math.floor(Math.random() * listofhats.length)];
  } while (newHat === currentSrc);

  return newHat;
}

const listofhats = [
  "hat-default.png",
  "hat-green.png",
  "hat-baseball.png",
  "hat-pink.png",
  "hat-cowboy.png",
  "hat-skicap.png",
  "hat-bucket.png",
  "hat-santa.png",
  "hat-usa.png",
];


hatimage.setAttribute("src", getNewHat());