/**
 * Created by ico on 7/9/17.
 */
//Random number guessing game
var correctGuess = false;

var randNum = Math.floor(Math.random()*10) + 1;
var guess = prompt("I'm thinking of a number between 1 and 10, what is it?")
if (parseInt(guess) === randNum){
    correctGuess = true;
 }
if (correctGuess){
    document.write("<p>You guessed correctly!</p>")
}
 else if(parseInt(guess) > randNum){
     var guessMore = prompt("Try again! The number I'm thinking of is more than " + guess)
        if(parseInt(guessMore) === randNum){
         correctGuess = true;
        }
 };
else if(parseInt(guess) < randNum){
    var guessLess = prompt("Try again! The number I'm thinking of is less than " + guess)
    if(parseInt(guessLess) === randNum){
        correctGuess = true;
    }
}
else {document.write("<p>Actually, the number I was thinking of was '</p>" + randNum)}