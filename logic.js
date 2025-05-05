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

	if (decklist = document.getElementById("deckid").innerHTML == 'Alt Rock') {
		shuffle(AltRockQuestion);
		for (let i = 0; i < 3; i++) {
		AltRockQuestion.forEach(creatediv);
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
document.getElementById("startbutton").classList.add("startbuttonon");
document.getElementById("stopbutton").classList.remove("stopbuttonon");
document.getElementById("flipswitchbody").classList.add("flipswitchoff");
document.getElementById("flipswitchbody").classList.remove("flipswitchon");
}





function creatediv(questionnumber) {

document.getElementById("questionlist").innerHTML += "<div><p>" + questionnumber + "</p></div>";

}








function stopwheel() {
document.getElementById("questionlist").classList.remove("startanimation");
document.getElementById("questionlist").classList.add("stopanimation");
document.getElementById("startbutton").classList.remove("startbuttonon");
document.getElementById("stopbutton").classList.add("stopbuttonon");
document.getElementById("flipswitchbody").classList.remove("flipswitchoff");
document.getElementById("flipswitchbody").classList.add("flipswitchon");

}




function openswitcher() {
document.getElementById("deckswitcher").classList.toggle("deckswitcheroff");
document.getElementById("deckswitcher").classList.toggle("deckswitcheron");
document.getElementById("deckchoices").classList.toggle("deckchoicesoff");
document.getElementById("deckchoices").classList.toggle("deckchoiceson");
}




function switchdeck(deckvalue) {

	document.getElementById("deckid").innerHTML = deckvalue;
	document.getElementById("questionlist").innerHTML = "";

	document.getElementById("deckswitcher").classList.toggle("deckswitcheroff");
	document.getElementById("deckswitcher").classList.toggle("deckswitcheron");
	document.getElementById("deckchoices").classList.toggle("deckchoicesoff");
	document.getElementById("deckchoices").classList.toggle("deckchoiceson");
}












