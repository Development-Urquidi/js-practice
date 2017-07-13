/**
 * Created by ico on 7/12/17.
 */

var randNum = getRandNum(10);
var  guess;
var  guessCount = 0;
var  correctGuess = false;

function getRandNum(top) {
    var num = Math.floor(Math.random() * top) + 1;
    return num
}
do {
    guess = prompt("I'm thinking of a number between one and ten. Can you guess what it is?")
    guessCount += 1;
    if (parseInt(guess) === randNum) {
        correctGuess = true
    }
}
    while( ! correctGuess)

document.write("<h1>You guessed the number!</h1>")
document.write("Only took " + guessCount + " to guess the number " + randNum);