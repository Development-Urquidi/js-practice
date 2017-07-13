/**
 * Created by ico on 7/12/17.
 */

var guestList = ["John","Mike","Sammy","Eric"]
console.log(guestList[0]);
console.log(guestList[3]);

var addGuest = function(){
    var newGuest = prompt("Please enter the name of one new guest")
    guestList.push(newGuest)
};

var addVIP = function(){
    var newVIP = prompt("Please enter the name of one new guest")
    guestList.unshift(newVIP)
};

