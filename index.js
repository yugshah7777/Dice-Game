// alert("Working!!!");      // initially to check if js is linked or not
var num1 = Math.floor(Math.random()*6+1);   // or Math.floor(Math.random()*6)+1
var num2 = Math.floor(Math.random()*6+1);

if(num1 > num2) document.querySelector("h1").innerHTML = "🚩 Player 1, Wins!";
else if(num1 < num2) document.querySelector("h1").innerHTML = "Player 2, Wins! 🚩";
else document.querySelector("h1").innerHTML = "Draw!";

// shortest solution
var randomDiceImage1 = "dice"+num1+".png";
var image1 = "./"+randomDiceImage1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", image1);

var randomDiceImage2 = "./dice"+num2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// solution 1
// if(num1 == 1) document.querySelector(".dice .img1").src = "./dice1.png";
// else if(num1 == 2) document.querySelector(".dice .img1").src = "./dice2.png";
// else if(num1 == 3) document.querySelector(".dice .img1").src = "./dice3.png";
// else if(num1 == 4) document.querySelector(".dice .img1").src = "./dice4.png";
// else if(num1 == 5) document.querySelector(".dice .img1").src = "./dice5.png";
// else document.querySelector(".dice .img1").src = "./dice6.png";

// if(num2 == 1) document.querySelector(".dice .img2").src = "./dice1.png";
// else if(num2 == 2) document.querySelector(".dice .img2").src = "./dice2.png";
// else if(num2 == 3) document.querySelector(".dice .img2").src = "./dice3.png";
// else if(num2 == 4) document.querySelector(".dice .img2").src = "./dice4.png";
// else if(num2 == 5) document.querySelector(".dice .img2").src = "./dice5.png";
// else document.querySelector(".dice .img2").src = "./dice6.png";


// solution 2 // using setAttribute tag // getAttribute tag gives the attribute while setAttribute sets/resets it
// if(num1 == 1) document.querySelector(".img1").setAttribute("src", "./dice1.png");
// else if(num1 == 2) document.querySelector(".img1").setAttribute("src", "./dice2.png");
// else if(num1 == 3) document.querySelector(".img1").setAttribute("src", "./dice3.png");
// else if(num1 == 4) document.querySelector(".img1").setAttribute("src", "./dice4.png");
// else if(num1 == 5) document.querySelector(".img1").setAttribute("src", "./dice5.png");
// else document.querySelector(".img1").setAttribute("src", "./dice6.png");

// if(num2 == 1) document.querySelector(".img2").setAttribute("src", "./dice1.png");
// else if(num2 == 2) document.querySelector(".img2").setAttribute("src", "./dice2.png");
// else if(num2 == 3) document.querySelector(".img2").setAttribute("src", "./dice3.png");
// else if(num2 == 4) document.querySelector(".img2").setAttribute("src", "./dice4.png");
// else if(num2 == 5) document.querySelector(".img2").setAttribute("src", "./dice5.png");
// else document.querySelector(".img2").setAttribute("src", "./dice6.png");