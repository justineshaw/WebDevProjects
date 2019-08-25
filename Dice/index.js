
var num1 = Math.floor(Math.random() * (7 - 1) + 1);
var num2 = Math.floor(Math.random() * (7 - 1) + 1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + num1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + num2 + ".png");

var header = document.querySelector("h1");
if (num1 == num2) {
    header.innerHTML = "Draw!";
}
else if (num1 > num2) {
    header.innerHTML = "Player 1 Wins!";
}
else {
    header.innerHTML = "Player 2 Wins!";
}
