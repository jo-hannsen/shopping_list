// STORE ELEMTENTS IN CACHE
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul:not(button)");

// DEFINE FUNCTIONS
function inputLenght() {
	return input.value.length;
}

function alertAtEmptyInput() {
	alert("Please enter an item !");
}

function createListElement() {
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	ul.appendChild(li);
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(delButton)
	delButton.setAttribute("id", "del");
	delButton.innerHTML="Delete";
	input.value = "";
}

function deleteListElement (element) {
	if (element.target.id === "del") {
		element.target.parentElement.remove();
		var del = document.getElementById("del");
	}
}

function addListAfterClick() {
	if (inputLenght() > 0) {
		createListElement();
		var ul = document.querySelectorAll("li");
	} else {
		alertAtEmptyInput();
	}
}

function addListAfterKeypress(event) {
	if (inputLenght() > 0 && event.keyCode === 13) {
		createListElement();
		var ul = document.querySelectorAll("li");
	} else if (inputLenght() === 0 && event.keyCode ===13) {
		alertAtEmptyInput();
	}
}

function markItemDone(element) {
	var li = element.target;
	li.classList.toggle("done");
}

function handleUiClick (element) {
	markItemDone(element);
	deleteListElement(element);
}

// CALL FUNCTIONS
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener("click", handleUiClick);