// Built by Havick
// Last modification:12/02/2017

var numSquares = 6;
var colors = [];
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

function pickColor() {
    var rnd = Math.floor(Math.random() * colors.length);
    return colors[rnd];
}

init();

function init() {

    reset();
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });

    }


    function reset() {
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        resetButton.textContent = "New Colors";
        message.textContent = "";

        for (i = 0; i < squares.length; i++) {
            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            } else {
                squares[i].style.display = "none";
            }
            squares[i].addEventListener("click", function () {
                var clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    message.textContent = "Correct!";

                    h1.style.backgroundColor = pickedColor;
                    changeColor(pickedColor);
                    resetButton.textContent = "Play Again?";
                } else {
                    this.style.backgroundColor = "#232323";
                    message.textContent = "Nope!";

                }
            });
            h1.style.background = "steelblue";

            if (colors[i]) {
                squares[i].style.backgroundColor = colors[i];
                squares[i].style.display = "block";
            } else {
                squares[i].style.display = "none";
            }
        }

        resetButton.addEventListener("click", function () {
            reset();
        });

        function changeColor(color) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = color;
            }
        }


        function generateRandomColors(num) {
            var randColorz = [];

            for (var i = 0; i < num; i++) {
                randColorz.push(generateRandomRgb());
            }
            return randColorz.filter(String);
        }

        function generateRandomRgb() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return "rgb(" + r + ", " + g + ", " + b + ")";
        }
    }
}


