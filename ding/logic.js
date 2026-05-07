let selectedTime = null;
const countdownEl = document.getElementById("TimerButton");


function NewGame() {

StartAnimation();
renderRandomItems(dinglist, count = 8)
}




function StartAnimation() {
	countdownEl.classList.remove("warning", "danger");
	countdownEl.classList.remove("explode");
	document.getElementById("SceneList").classList.add("startanimation");
	document.getElementById("StartButton").classList.add("turnoff");

setTimeout(() => {

     	document.getElementById("SceneList").classList.remove("startanimation");

}, 2000);


}




let usedFirstItems = [];

function renderRandomItems(items, count = 8) {
document.getElementById("TimeText").innerHTML= "";
document.getElementById("TimerButton").innerHTML= "";
  const parentdiv = document.getElementById("SceneList");


  // Clear the parent div
  parentdiv.replaceChildren();

  // Reset if we've used all items as "first"
  if (usedFirstItems.length >= items.length) {
    usedFirstItems = [];
  }

  // Get available candidates for the first slot
  const availableFirst = items.filter(item => !usedFirstItems.includes(item));

  // Pick a random first item from remaining pool
  const firstItem = availableFirst[Math.floor(Math.random() * availableFirst.length)];

  // Track it
  usedFirstItems.push(firstItem);

// Now build the rest (can repeat, as you said)
  const remaining = items.filter(item => item !== firstItem);

  const shuffledRest = [...remaining].sort(() => Math.random() - 0.5);
  const selectedItems = [firstItem, ...shuffledRest.slice(0, count - 1)];


setTimeout(() => {

selectedTime = firstItem[1] ;
document.getElementById("TimeText").innerHTML= "You have <b>" + selectedTime + " SECONDS</b> to...";
document.getElementById("TimerButton").textContent = selectedTime;
	document.getElementById("StartClock").classList.remove("turnoff");
	document.getElementById("StartClock").textContent = "Start Clock";

}, 2000);



  // Render
  selectedItems.forEach(item => {
    const newdiv = document.createElement("div");
    newdiv.classList.add("SceneUnit");
    newdiv.textContent = item[0];
    parentdiv.appendChild(newdiv);
  });


}




let timer = null;
let current = null;


function StartStopTimer() {




  if (timer) {
    clearInterval(timer);
    timer = null;
    EndTimer();
    return;
  }
StartTimer();

current=selectedTime;

  // If stopped → start
  timer = setInterval(() => {
    current--;
    countdownEl.textContent = current;

  countdownEl.classList.remove("tick");
  void countdownEl.offsetWidth;
  countdownEl.classList.add("tick");

updateCountdownStyle();

    if (current <= 0) {
      clearInterval(timer);
      timer = null;
      EndTimer();
countdownEl.classList.remove("warning", "danger", "tick");
countdownEl.textContent = "DING!";
countdownEl.classList.add("explode");
setTimeout(() => {
countdownEl.classList.remove("explode");
countdownEl.innerHTML = "<div class='FinalDing'>DING!</div>";
}, 1000);
    }
  }, 1000);


}



function StartTimer() {
	document.getElementById("StartButton").classList.add("turnoff");
	document.getElementById("StartClock").classList.remove("turnoff");
	document.getElementById("StartClock").textContent = "Stop Clock";
	document.getElementById("StartClock").classList.add("RedButton");
	document.getElementById("StartClock").classList.remove("GreenButton");
	document.getElementById("TimerShell").classList.add("TimerOn");
	document.getElementById("TimerShell").classList.remove("TimerOff");
}

function EndTimer() {
	document.getElementById("StartButton").classList.remove("turnoff");
	document.getElementById("StartClock").classList.add("turnoff");
	document.getElementById("StartClock").textContent = "Start Clock";
	document.getElementById("StartClock").classList.remove("RedButton");
	document.getElementById("StartClock").classList.add("GreenButton");
	document.getElementById("TimerShell").classList.add("TimerOff");
	document.getElementById("TimerShell").classList.remove("TimerOn");
	countdownEl.classList.remove("warning", "danger");
}




function updateCountdownStyle() {
  countdownEl.classList.remove("warning", "danger");

  if (current <= 3) {
    countdownEl.classList.add("danger");
  } else if (current <= 5) {
    countdownEl.classList.add("warning");
  }
}







