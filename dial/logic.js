setTimeout(function(){
    document.body.className="";
},500);


const decks = {
    Quick: QuickQuestion,
    Discussion: DiscQuestion,
    Ridiculous: RidicQuestion,
    Work: WorkQuestion,
    Kids: KidQuestion,
    Positive: PosQuestion,
    Travel: TravelQuestion,
    Music: MusicQuestion,
};


// Prepare this once per session
let firsts = [];  // pool of indices we haven't used yet

function initFirsts(array) {
    firsts = [...array];         // copy the array
    shuffle(firsts);             // shuffle once for randomness
}

// Your existing Fisher-Yates shuffle
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// "Smart shuffle" that enforces unique first value
function smartShuffle(array) {
    if (firsts.length === 0) {
        initFirsts(array);       // reset after all have been used
    }

    const firstValue = firsts.pop();   // unique first value
    shuffle(array);                     // shuffle normally
    const index = array.indexOf(firstValue);

    // move that chosen value to the front
    [array[0], array[index]] = [array[index], array[0]];
}





function startwheel() {

	document.getElementById("questionlist").innerHTML = "";
	let decklist = document.getElementById("deckid").innerHTML;



const deck = decks[decklist];

if (deck) {
    smartShuffle(deck);

    for (let i = 0; i < 3; i++) {
        deck.forEach(creatediv);
    }
}






document.getElementById("questionlist").classList.remove("stopanimation"); 
document.getElementById("questionlist").classList.add("startanimation");

buttonstopactive();
buttonstartdeactive();
document.getElementById("deckswitcher").style.visibility = 'hidden';
}





function creatediv(questionnumber) {
	document.getElementById("questionlist").innerHTML += "<div><p style='text-wrap: balance;'>" + questionnumber + "</p></div>";
}






function stopwheel() {
	document.getElementById("questionlist").classList.remove("startanimation");
	document.getElementById("questionlist").classList.add("stopanimation");

	buttonstartactive();
	buttonstopdeactive();
	document.getElementById("deckswitcher").style.visibility = 'visible';
}







function openswitcher() {
document.getElementById("deckswitcher").classList.toggle("deckswitcheroff");
document.getElementById("deckswitcher").classList.toggle("deckswitcheron");
document.getElementById("deckchoices").classList.toggle("deckchoicesoff");
document.getElementById("deckchoices").classList.toggle("deckchoiceson");


if (document.getElementById("deckswitcher").classList.contains('deckswitcheroff')) {
  buttonstartactive();
} else {
buttonstartdeactive();
}



}




function switchdeck(deckvalue) {
	firsts = [];
	document.getElementById("deckid").innerHTML = deckvalue;
	document.getElementById("questionlist").innerHTML = "";


closeswitcher();
buttonstartactive();
buttonstopdeactive();
setCategory(deckvalue);
console.log('Deck switched to ' + deckvalue + ' Questions.');

}







function buttonstartactive() {
	document.getElementById("startbutton").classList.remove("startbuttonon");
}
function buttonstartdeactive() {
	document.getElementById("startbutton").classList.add("startbuttonon");
}
function buttonstopactive() {
	document.getElementById("stopbutton").classList.remove("stopbuttonon");
}
function buttonstopdeactive() {
	document.getElementById("stopbutton").classList.add("stopbuttonon");
}
function closeswitcher() {
	document.getElementById("deckswitcher").classList.toggle("deckswitcheroff");
	document.getElementById("deckswitcher").classList.toggle("deckswitcheron");
	document.getElementById("deckchoices").classList.toggle("deckchoicesoff");
	document.getElementById("deckchoices").classList.toggle("deckchoiceson");
}



////////////////////////////////////////////
// ADDS CATEGORY AS A PARAMETER TO THE URL

function setCategory(deckvalue) {
  const url = new URL(window.location.href);

  // Add or update the parameter
  url.searchParams.set("category", deckvalue);

  // Update the browser URL without reloading the page
  window.history.replaceState({}, "", url);
}


////////////////////////////////////////////
// IF CATEGORY EXISTS, SWITCH TO THAT DECK

function checkCategory() {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  if (category && category in decks) {
    	console.log('Deck opened as ' + category + '.');
	switchdeck(category)
	closeswitcher();
  }
}


window.addEventListener("load", checkCategory);



