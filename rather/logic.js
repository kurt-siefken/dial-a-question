setTimeout(function(){
    document.body.className="";
},500);


function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



function startwheel() {

	document.getElementById("questionlist1").innerHTML = "";
	document.getElementById("questionlist2").innerHTML = "";

		shuffle(Rather);
		for (let i = 0; i < 3; i++) {
		Rather.forEach(creatediv1);
		}

		shuffle(Rather);
		for (let i = 0; i < 3; i++) {
		Rather.forEach(creatediv2);
		}	


document.getElementById("questionlist1").classList.remove("stopanimation"); 
document.getElementById("questionlist1").classList.add("startanimation");
document.getElementById("questionlist2").classList.remove("stopanimation"); 
document.getElementById("questionlist2").classList.add("startanimation");
document.getElementById("stopbutton1").classList.remove("stopbuttonoff"); 
document.getElementById("stopbutton1").classList.add("stopbuttonon");
document.getElementById("stopbutton2").classList.remove("stopbuttonoff"); 
document.getElementById("stopbutton2").classList.add("stopbuttonon");
}





function creatediv1(questionnumber) {
if (document.getElementById("questionlist1").innerHTML=="") {document.getElementById("dedupeme").innerHTML = questionnumber;}
	document.getElementById("questionlist1").innerHTML += "<div><p>" + questionnumber + "</p></div>";

}
function creatediv2(questionnumber) {
if (questionnumber != document.getElementById("dedupeme").innerHTML ) {
	document.getElementById("questionlist2").innerHTML += "<div><p style='text-wrap: balance;'>" + questionnumber + "</p></div>";
}
}





function stopwheel(wheelnum) {

	document.getElementById("questionlist" + wheelnum).classList.remove("startanimation");
	document.getElementById("questionlist" + wheelnum).classList.add("stopanimation");
	document.getElementById("stopbutton" + wheelnum).classList.remove("stopbuttonon"); 
	document.getElementById("stopbutton" + wheelnum).classList.add("stopbuttonoff");

}










