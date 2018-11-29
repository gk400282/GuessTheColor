var squares = document.querySelectorAll(".square");
var header = document.querySelector("h1");
var pickedColorDisplay = document.getElementById("pickedColor");
var resetButton = document.getElementById("resetButton");
var message = document.getElementById("message");
var colors = [];
var pickedColor = "";
var easyButton = document.getElementById("easyButton");
var hardButton = document.getElementById("hardButton");
var mode = 6;

function pickColor(){
	var randomNumber = Math.floor(Math.random()*mode);
	pickedColor = colors[randomNumber];
	pickedColorDisplay.textContent = pickedColor.toUpperCase();
}

function generateColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var color = "rgb("+r+", "+g+", "+b+")";
	return color;
}

function setWinnerColor(color){
	squares.forEach(function(square){
		square.style.backgroundColor = color;
	});
}
function saveColors(){
	for(var i = 0; i < mode; i++){
	colors[i] = generateColor();
	squares[i].style.backgroundColor = colors[i];
	}
}
function resetColors(){
	saveColors();
	pickColor();
	message.textContent = "";
	header.style.backgroundColor = "#173e43";
	resetButton.textContent = "New Colors";
}
function clearColors(){
	for(var i = 0; i < 6; i++){
		colors[i] = "";
	}
}
function hideUnhide(){
	for(var i = 0; i < 6; i++){
		if(colors[i] !== ""){
			squares[i].style.display = "block";
		}
		else{
			squares[i].style.display = "none";
		}
	}
}
function modeChange(){
	clearColors();
	resetColors();
	hideUnhide();
}


squares.forEach(function(square){
	square.addEventListener("click", function(){
		if(this.style.backgroundColor === pickedColor){
			setWinnerColor(pickedColor);
			header.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
			message.textContent = "Correct!";
		}
		else{
			this.style.backgroundColor = "transparent";
			message.textContent = "Try again!";
		}

	});
});
window.onload = resetColors;
resetButton.addEventListener("click",function(){
	resetColors();
});
easyButton.addEventListener("click", function(){
	mode = 3;
	modeChange();
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
});
hardButton.addEventListener("click", function(){
	mode = 6;
	modeChange();
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
});


