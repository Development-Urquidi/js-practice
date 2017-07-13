/**
 * Created by ico on 7/9/17.
 */

var wholesalePrice = 5.45;
var retailPrice = 9.99;
var quantity = 47;

var revenue = retailPrice * quantity;
var profit = revenue - (wholesalePrice * quantity);
var profitPerUnit = profit / quantity;
document.write("Widget Sales: \n" +
                "Revenue: " + revenue + "\n" +
                "Profit: " + profit + "\n" +
                "Marginal Profit: " + profitPerUnit + "\n");

var temperature = 37.5;
alert("It's about " + Math.round(temperature) + " or " + alert(Math.floor(temperature)) " degrees out there. \n");
