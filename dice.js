const randomNumber1 = Math.ceil((Math.random()) * 6);
const randomNumber2 = Math.ceil((Math.random()) * 6);

// Better solution

const randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // Player 1
const randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // Player 2

document.querySelector(".img1").setAttribute("src", randomDiceImage1); // Player 1
document.querySelector(".img2").setAttribute("src", randomDiceImage2); // Player 2

/**Original solution
switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", 'images/dice1.png');
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", 'images/dice2.png');
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", 'images/dice3.png');
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", 'images/dice4.png');
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", 'images/dice5.png');
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", 'images/dice6.png');
        break;
    default:
        document.querySelector(".img1").setAttribute("src", 'images/dice-error.png');
}
*/

/**Original solution
switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", 'images/dice1.png');
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", 'images/dice2.png');
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", 'images/dice3.png');
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", 'images/dice4.png');
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", 'images/dice5.png');
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", 'images/dice6.png');
        break;
    default:
        document.querySelector(".img2").setAttribute("src", 'images/dice-error.png');
}
*/

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🏆";
} else {
    document.querySelector("h1").innerHTML = "It's a draw!";
}