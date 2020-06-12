var x=6;
var easyButton=document.querySelector("#easyBtn");
var hardButton=document.querySelector("#hardBtn");
var colors = generateRandomColors(x); 
var squares=document.querySelectorAll(".square");
var pickedColor=pickcolor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
colorDisplay.textContent = pickedColor;
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	x=3;
	colors=generateRandomColors(x);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	if(colors[i])
    	squares[i].style.background=colors[i];
        else
        squares[i].style.display="none";
    }
    h1.style.background="steelblue";
    messageDisplay.textContent=" ";
})

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	x=6;
	colors=generateRandomColors(x);
	pickedColor=pickcolor();
	colorDisplay.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.background=colors[i];
        squares[i].style.display="block";
    }
    h1.style.background="steelblue";
    messageDisplay.textContent=" ";
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;

		if(clickedColor===pickedColor)
			{
				h1.style.background=pickedColor;
				messageDisplay.textContent="Correct!";
				changeColors(pickedColor);
				resetButton.textContent="Play Again";
			}
		else
		{
			messageDisplay.textContent="Try again";
			this.style.background="#232323";
		}
	})
}

resetButton.addEventListener("click",function(){
	colors=generateRandomColors(x);
    pickedColor=pickcolor();
    colorDisplay.textContent=pickedColor;
    this.textContent="New Colors"
    for(var i=0;i<squares.length;i++)
    {
    	squares[i].style.background=colors[i];
    }
    h1.style.background="steelblue";
    messageDisplay.textContent=" ";
})

function changeColors(color)
{
	 for(var i=0;i < squares.length;i++)
	squares[i].style.background=color;
}

function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
    var arr=[];
    for(var i=0;i<num;i++)
    {
    	arr.push(randomColor());
    }  
    return arr;
} 

function randomColor(){
	var r=Math.floor((Math.random() * 256));
	var b=Math.floor((Math.random() * 256));
	var g=Math.floor((Math.random() * 256));
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
