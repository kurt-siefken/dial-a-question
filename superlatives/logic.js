
function createDivWithTenItems(array) {

    // Get a top card that hasn't been used recently
    const topCard = getUniqueTopCard(array);

    // Shuffle the full array
    const shuffled = [...array].sort(() => Math.random() - 0.5);

    // Remove the top card if it appears elsewhere
    const remaining = shuffled.filter(item => item !== topCard);

    // Put the top card first
    const selected = [topCard, ...remaining.slice(0, 9)];

    const div = document.createElement('div');

    for (let i = 0; i < 3; i++) {
        selected.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = item;
            itemDiv.className = 'boxitem';
            div.appendChild(itemDiv);
        });
    }

    return div;
}


////////////////////////////////////////////
// MAKES SURE THE TOP ANSWER IS NOT REPEATED

const topCardDecks = new Map();

function getUniqueTopCard(array) {
    if (!topCardDecks.has(array) || topCardDecks.get(array).length === 0) {
        topCardDecks.set(
            array,
            [...array].sort(() => Math.random() - 0.5)
        );
    }


    return topCardDecks.get(array).pop();
}
//////////////////////////////////////////////







function startwheel() {

const categoryBox = document.getElementById('categorybox');
categoryBox.innerHTML = '';
categoryBox.appendChild(createDivWithTenItems(CompareCategory));

const adjectiveBox = document.getElementById('adjectivebox');
adjectiveBox.innerHTML = '';
adjectiveBox.appendChild(createDivWithTenItems(CompareAdjective));



document.getElementById("categorybox").classList.remove("stopanimation"); 
document.getElementById("categorybox").classList.add("startanimation");
document.getElementById("adjectivebox").classList.remove("stopanimation"); 
document.getElementById("adjectivebox").classList.add("startanimation");
document.getElementById("startbutton").classList.add("startbuttonon");
document.getElementById("stopbutton").classList.remove("stopbuttonon");
}





function stopwheel() {
document.getElementById("categorybox").classList.remove("startanimation"); 
document.getElementById("categorybox").classList.add("stopanimation");
 
setTimeout(() => {
	document.getElementById("adjectivebox").classList.add("stopanimation"); 
	document.getElementById("adjectivebox").classList.remove("startanimation");
	document.getElementById("startbutton").classList.remove("startbuttonon");
	document.getElementById("stopbutton").classList.add("stopbuttonon");
}, 500);


}








console.log("There are " +  CompareCategory.length + " categories and " + CompareAdjective.length + " descriptions to create " + (CompareCategory.length * CompareAdjective.length).toLocaleString() + " possible questions!");
