

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1 -6

    var randomDiceImage = "images/dice"+randomNumber1+".png"; /// randomImage between images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomDiceImage);
// ---------------------------------------

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";/// randomImage between images/dice1.png - images/dice6.png image 2

    var image2 = document.querySelectorAll("img")[1];

    image2.setAttribute("src", randomDiceImage2);

    if(randomNumber1 === randomNumber2){
      document.querySelector("h1").innerHTML = "Draw game";
      document.querySelector("h1").setAttribute("class", "textResultDraw");
    }
    else if (randomNumber1 > randomNumber2){
      document.querySelector("h1").innerHTML = "Player One Won";
      document.querySelector("h1").setAttribute("class", "textResultWin");
    }
    else {
      document.querySelector("h1").innerHTML = "Player two Won";
      document.querySelector("h1").setAttribute("class", "textResultWin");

    }
