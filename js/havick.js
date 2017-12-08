// Built by Havick
// Last modification:12/02/2017

var colors = generateRandomColors(6);

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

function generateRandomColors(num){
    var randColorz = [];

    for(var i = 0; i < num; i++ ){
        randColorz.push(generateRandomRgb());
    }
    return randColorz;
}

function generateRandomRgb(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", "+ g + ", " + b + ")";
}
