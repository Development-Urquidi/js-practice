/**
 * Created by ico on 7/12/17.
 */
//Dice roller for DnD, Pathfinder, etc.

var dNum = '';
dNum = parseInt(prompt("How many sides on the die you'd like to roll?"))

var getRandNum =function() {
    var randNum = Math.floor(Math.random() * dNum) + 1;
    return randNum;
};

while(isNaN(dNum)) {
    dNum = prompt("Please enter only a number")

if(!isNaN(dNum))
    {
        var dieRoll = getRandNum(dNum);
        alert("The die rolls to " + dieRoll);
        break;
    }
}