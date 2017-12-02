// Built by Havick
// Last modification:12/02/2017

var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 0, 255)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(112, 255, 255)"
];

var range = colors.length;
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var message = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            message.textContent = "Correct!";
            message.style.color="white";
            changeColor(pickedColor);


        } else {
            this.style.backgroundColor = "#232323";
            message.textContent = "Wrong, Try again!";
            message.style.color="white";
        }
    });
}

function changeColor(color){
    for(var i=0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var rnd = Math.floor(Math.random() * range + 1);
    return colors[rnd];
}
