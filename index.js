function whoWon() {
var diceNo = Math.floor(Math.random()*6)+1;
var diceImage = "dice" + diceNo + ".png";
var imgSrc = "images/"+diceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", imgSrc);

var diceNo2 = Math.floor(Math.random() * 6) + 1;
var diceImage2 = "dice" + diceNo2 + ".png";
var imgSrc2 = "images/" + diceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", imgSrc2);

if (diceNo > diceNo2) {
    document.querySelector("h1").textContent = "Player 1 is the Winner!";
}
else{
    document.querySelector("h1").textContent = "Player 2 is the Winner!";
}
}
