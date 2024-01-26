//Dice on the left

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var imgElement1 = document.querySelector(".img1");

imgElement1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

//Dice on the right

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imgElement2 = document.querySelector(".img2");

imgElement2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

//Changing h1 to show who won

var theWinner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    theWinner.innerHTML = "🚩Player 1 Wins";
} else if (randomNumber1 < randomNumber2) {
    theWinner.innerHTML = "🚩Player 2 Wins";
} else {
    theWinner.innerHTML = "Draw!";
}