var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colordisplay");
var result = document.querySelector("#result");
var heading = document.querySelector("#heading");
var playagain = document.querySelector("#playagain");

colorDisplay.textContent = pickedColor; 

var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");

init();

function init()
{
	//mode buttons event listeners
	for (var i = 0; i < squares.length; i++)
	{
		//setting up board
		squares[i].style.backgroundColor = colors[i];
	}

	for (var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function(){
			if (this.style.backgroundColor === pickedColor) //win!
			{
				for (var j = 0; j < squares.length; j++)
				{
					//change all squares to picked color
					squares[j].style.backgroundColor = pickedColor;
				}

				result.textContent = "Correct!";
				heading.style.backgroundColor = pickedColor;
				playagain.textContent ="Play again?";
			}
			else //lose
			{
				this.style.backgroundColor = "black";
				result.textContent = "Try again";
			}
		});
	}


}


var numSquares = 6;

easy.addEventListener("click", easymode);

function easymode()
{ 
	colors = generateRandomColors(3);
	numSquares = 3;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	playagain.textContent ="New colors";
	result.textContent = " ";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	heading.style.backgroundColor = "rgb(115, 180, 209)";
	for (var i = 0; i < 3; i++)
	{
		//setting up board
		squares[i].style.backgroundColor = colors[i];
	}
	for (var i = 3; i < 6; i++)
	{
		//setting up board
		squares[i].style.display = "none";
	}

}

hard.addEventListener("click", hardmode);

function hardmode()
{
	colors = generateRandomColors(6);
	numSquares = 6;
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	playagain.textContent ="New colors";
	result.textContent = " ";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	heading.style.backgroundColor = "rgb(115, 180, 209)";
	for (var i = 0; i < squares.length; i++)
	{
		//setting up board
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}

}


function pickColor() //generating random color that the user needs to figure out
{
	var num = Math.floor(Math.random() * colors.length);
	return colors[num];
}

function generateRandomColors(num) //generating colored boxes
{
	//make an array
	var randomColorArray = [];
	//add num random colors to array
	for (var i = 0; i < num; i++)
	{
		//get random color and push into array
		randomColorArray.push(randomColor());

	}
	//return that array
	return randomColorArray;
}

function randomColor() //picking random color for each box
{
	//pick a red from 0 - 255
	var red = Math.floor(Math.random() * 256);
	//pick a green
	var green = Math.floor(Math.random() * 256);
	//pick a blue
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", "+ green + ", " + blue + ")";
}

//play again button, which is also new colors button
playagain.addEventListener("click", function() 
{
	if (numSquares === 6)
	{
		hardmode();
	}
	else
	{
		easymode();
	}
});
