setTimeout(function(){
    document.body.className="";
},500);




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

	if (decklist = document.getElementById("deckid").innerHTML == 'Quick') {
		smartShuffle(QuickQuestion);
		for (let i = 0; i < 3; i++) {
		QuickQuestion.forEach(creatediv);
		}	
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Discussion') {
		smartShuffle(DiscQuestion);
		for (let i = 0; i < 3; i++) {
		DiscQuestion.forEach(creatediv);
		}
	}


	if (decklist = document.getElementById("deckid").innerHTML == 'Ridiculous') {
		smartShuffle(RidicQuestion);
		for (let i = 0; i < 3; i++) {
		RidicQuestion.forEach(creatediv);
		}
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Work') {
		smartShuffle(WorkQuestion);
		for (let i = 0; i < 3; i++) {
		WorkQuestion.forEach(creatediv);
		}
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Kids') {
		smartShuffle(KidQuestion);
		for (let i = 0; i < 3; i++) {
		KidQuestion.forEach(creatediv);
		}
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Positive') {
		smartShuffle(PosQuestion);
		for (let i = 0; i < 3; i++) {
		PosQuestion.forEach(creatediv);
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

	document.getElementById("deckswitcher").classList.toggle("deckswitcheroff");
	document.getElementById("deckswitcher").classList.toggle("deckswitcheron");
	document.getElementById("deckchoices").classList.toggle("deckchoicesoff");
	document.getElementById("deckchoices").classList.toggle("deckchoiceson");

buttonstartactive();
buttonstopdeactive();
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


