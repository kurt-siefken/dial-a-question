setTimeout(function(){
    document.body.className="";
},500);



// Shuffle without repeat
function createShuffle() {
    let topQueue = [];
    let lastTop = null;

    return function shuffle(array) {
        // Refill the top queue once we've used every item
        if (topQueue.length === 0) {
            topQueue = [...array];

            // Shuffle the queue
            for (let i = topQueue.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [topQueue[i], topQueue[j]] = [topQueue[j], topQueue[i]];
            }

            // Optional: prevent the first item of a new cycle
            // from matching the last item of the previous cycle
            if (
                topQueue.length > 1 &&
                topQueue[topQueue.length - 1] === lastTop
            ) {
                [topQueue[0], topQueue[topQueue.length - 1]] =
                    [topQueue[topQueue.length - 1], topQueue[0]];
            }
        }

        // Pick the next guaranteed-unique top item
        const topItem = topQueue.pop();
        lastTop = topItem;

        // Shuffle the actual array normally
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }

        // Find our chosen top item and move it to index 0
        const topIndex = array.indexOf(topItem);

        [array[0], array[topIndex]] =
            [array[topIndex], array[0]];

        return array;
    };
}

const shuffle = createShuffle();






// Simple Shuffle (not used anymore)
function shuffleSIMPLE(array) {
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

document.getElementById("startbutton").classList.add("stopbuttonoff");
document.getElementById("questionlist1").classList.add("startanimation");
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
	document.getElementById("questionlist1").innerHTML += "<div><p style='text-wrap: balance;'>" + questionnumber + "</p></div>";

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

const stop1 = document.getElementById("stopbutton1");
const stop2 = document.getElementById("stopbutton2");

if (
  stop1.classList.contains("stopbuttonoff") &&
  stop2.classList.contains("stopbuttonoff")
) {
setTimeout(() => {
    document.getElementById("startbutton").classList.remove("stopbuttonoff");
}, 2000);

}


}







console.log("There are " + (Rather.length * (Rather.length - 1)).toLocaleString() + " possible Would You Rather combinations!");


