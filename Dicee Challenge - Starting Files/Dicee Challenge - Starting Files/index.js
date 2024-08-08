
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  
  const diceImage1 = document.getElementById("dice1");
  const diceImage2 = document.getElementById("dice2");
  
  diceImage1.setAttribute("src", diceImages[randomNumber1 - 1]);
  diceImage2.setAttribute("src", diceImages[randomNumber2 - 1]);
  let resultText;
  if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 wins";
  } else if (randomNumber2 > randomNumber1) {
    resultText = "Player 2 wins";
  } else {
    resultText = "Draw";
  }

  document.querySelector('h1').innerHTML=resultText;
  // JavaScript
const myDiv = document.getElementById("myDiv");
// myDiv.style.cssText = "color: blue; font-size: 24px; background-color: yellow";

  
  
    
