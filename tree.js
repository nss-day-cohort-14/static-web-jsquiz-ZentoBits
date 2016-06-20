var butt = document.getElementById("buttPress");


///////// retrieves input box ///////////
function getValues() {
	var character = document.getElementById("charBox").value;
	var height = parseInt( document.getElementById("heightBox").value );
	
	var userInput = {
		character: character,
		height: height,
	};

	return userInput;
}


////////// function for tree generation //////////
function treeForm(value) {
	var space = "";
	var output = '';
	var charas = value.character;
	for (i = 0; i < value.height; i += 1) {
		space += " ";
	}

		console.log(space + charas);
	for (i = 0; i < value.height; i += 1) {
		charas += value.character + value.character;

		output = space.slice(i + 1) + charas;
		console.log(output);
	}
}


////////// click event for tree generation ///////////
butt.addEventListener("click", function(event){
	var thing = getValues();
		if (thing.height !== "" && thing.character !== "") {
			if (!thing.height) {
				alert("Please choose a number");
			} else {
				treeForm(thing);
			}
		} else {
			alert("Please choose a character and height!");
		}
});

var form = document.getElementsByTagName("form")[0];


/////////////// key press event ///////////////////
form.addEventListener("keypress", function(event) {
	if ( event.keyCode === 13 ) {
		var thing = getValues();
		if (thing.height !== "" && thing.character !== "") {
			if (!thing.height) {
				alert("Please choose a number");
			} else {
				treeForm(thing);
			}
		} else {
			alert("Please choose a character and height!");
		}
	} 

});









