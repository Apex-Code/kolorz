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

var squares = document.getElementsByClassName("square");
var pickedColor = colors[3];
var colorDisplay=document.getElementById("colorDisplay");

colorDisplay.textContent = pickedColor;

for(i=0; i<squares.length; i++){
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            alert("correct!!");
        } else {
            this.style.backgroundColor = "#232323";
        }
    });
}


