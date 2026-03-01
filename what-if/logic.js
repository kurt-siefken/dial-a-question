  const btn = document.querySelector(".toggle");
  const panel = document.querySelector("#contentpanel");

  function openPanel(el) {
    // Make it measurable
    el.hidden = false;

    // Start from 0 (in case it was auto)
    el.style.height = "0px";

    // Force reflow so the browser "commits" the 0px before transitioning
    el.getBoundingClientRect();

    // Animate to content height
    el.style.height = el.scrollHeight + "px";

    // After the transition, let it be auto so it can adapt if content changes
    const onEnd = (e) => {
      if (e.propertyName !== "height") return;
      el.style.height = "auto";
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  }

  function closePanel(el) {
    // If it's auto, we must set an explicit px height so we can animate down to 0
    el.style.height = el.scrollHeight + "px";

    // Force reflow
    el.getBoundingClientRect();

    // Animate closed
    el.style.height = "0px";

    const onEnd = (e) => {
      if (e.propertyName !== "height") return;
      el.hidden = true;
      el.removeEventListener("transitionend", onEnd);
    };
    el.addEventListener("transitionend", onEnd);
  }

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) closePanel(panel);
    else openPanel(panel);
  });




function startwheel() {
var randompick = 0;
document.getElementById("whatif-headline").innerHTML = ""


document.getElementById("whatif-headline").classList.add("startanimation");
document.getElementById("button-spin").classList.add("turnoffbutton");
document.getElementById("button-readmore").classList.add("turnoffbutton");


setTimeout(() => {
    document.getElementById("whatif-headline").classList.remove("startanimation");
    document.getElementById("button-spin").classList.remove("turnoffbuttonz");
	document.getElementById("button-spin").innerHTML = "Spin Again";
	document.getElementById("button-readmore").classList.remove("turnoffbutton");
}, 1500);
setTimeout(() => {

    document.getElementById("button-spin").classList.remove("turnoffbutton");

}, 2000);

}


function creatediv(questionnumber) {

	document.getElementById("whatif-headline").innerHTML += "<div><p style='text-wrap: balance;'>"+ questionnumber + "</p></div>";
}









function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function pickAndShuffle(originalArray) {
  // Step 1: pick random index
  const randomIndex = Math.floor(Math.random() * originalArray.length);
  const chosenItem = originalArray[randomIndex];

  // Step 2: make a copy
  const tempArray = [...originalArray];

  // Step 3: shuffle the copy
  shuffleArray(tempArray);

  // Step 4: move chosen item to front
  const chosenPosition = tempArray.indexOf(chosenItem);
  [tempArray[0], tempArray[chosenPosition]] = 
    [tempArray[chosenPosition], tempArray[0]];

  return {
    shuffledArray: tempArray,
    chosenIndex: randomIndex
  };
}

// Button click example
document.getElementById("button-spin").addEventListener("click", function() {
  const result = pickAndShuffle(WhatIfQuestion);

		for (let i = 0; i < 3; i++) {
		result.shuffledArray.forEach(creatediv);
		}

document.getElementById("content_inside").innerHTML = WhatIfScenario[result.chosenIndex];

  console.log("Random index picked:", result.chosenIndex);
  console.log("New shuffled array:", result.shuffledArray);
});






