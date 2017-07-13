/**
 * Created by ico on 7/9/17.
 */
var message = "Hello world!";
alert(message);
message = "Welcome to a Javascript script";
alert(message);

var visitorName = prompt('Please enter your first name');
alert("Hello, " + visitorName);
console.log(visitorName);
var lastName = prompt("And your last name?");
visitorName += " " + lastName;
document.write("Welcome to this page, " + visitorName);
console.log(visitorName.toUpperCase());