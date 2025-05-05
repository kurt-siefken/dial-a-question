function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



function startwheel() {

	document.getElementById("questionlist").innerHTML = "";

	if (decklist = document.getElementById("deckid").innerHTML == 'Quick') {
		shuffle(QuickQuestion);
		for (let i = 0; i < 3; i++) {
		QuickQuestion.forEach(creatediv);
		}	
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Discussion') {
		shuffle(DiscQuestion);
		for (let i = 0; i < 3; i++) {
		DiscQuestion.forEach(creatediv);
		}
	}


	if (decklist = document.getElementById("deckid").innerHTML == 'Ridiculous') {
		shuffle(RidicQuestion);
		for (let i = 0; i < 3; i++) {
		RidicQuestion.forEach(creatediv);
		}
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Work') {
		shuffle(WorkQuestion);
		for (let i = 0; i < 3; i++) {
		WorkQuestion.forEach(creatediv);
		}
	}

	if (decklist = document.getElementById("deckid").innerHTML == 'Positive') {
		shuffle(PosQuestion);
		for (let i = 0; i < 3; i++) {
		PosQuestion.forEach(creatediv);
		}
	}







document.getElementById("questionlist").classList.remove("stopanimation"); 
document.getElementById("questionlist").classList.add("startanimation");

buttonstopactive();
buttonstartdeactive();
document.getElementById("deckswitcher").style.display = 'none';
}





function creatediv(questionnumber) {
	document.getElementById("questionlist").innerHTML += "<div><p>" + questionnumber + "</p></div>";
}






function stopwheel() {
	document.getElementById("questionlist").classList.remove("startanimation");
	document.getElementById("questionlist").classList.add("stopanimation");

	buttonstartactive();
	buttonstopdeactive();
document.getElementById("deckswitcher").style.display = 'block';
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


