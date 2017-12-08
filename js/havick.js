// Built by Havick
// Last modification:12/02/2017

numSquares = 6;
var colors = [];
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard")


resetButton.addEventListener("click", function(){
   theGame(numSquares);
});

theGame(6);



function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var rnd = Math.floor(Math.random() * colors.length );
    return colors[rnd];
}

function generateRandomColors(num){
    var randColorz = [];

    for(var i = 0; i < num; i++ ){
        randColorz.push(generateRandomRgb());
    }
    return randColorz.filter(String);
}

function generateRandomRgb(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", "+ g + ", " + b + ")";
}

// Easy Mode //

easyButton.addEventListener("click", function(){
   easyButton.classList.add("selected");
   hardButton.classList.remove("selected");
   numSquares = 3;
   theGame(numSquares);
});

// Hard Mode //
hardButton.addEventListener("click", function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    theGame(numSquares);
});

function theGame(num){
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.style.color = "firebrick";
    for(i=0; i<squares.length; i++){
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }else{
            squares[i].style.display = "none";
        }
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                message.textContent = "Correct!";
                message.style.color="white";
                h1.style.backgroundColor = pickedColor;
                changeColor(pickedColor);
                resetButton.textContent = "Play Again?";
            } else {
                this.style.backgroundColor = "#232323";
                message.textContent = "Wrong, Try again!";
                message.style.color="white";
            }
        });
        h1.style.background = "firebrick";
        resetButton.textContent = "New Colors"
    }
}