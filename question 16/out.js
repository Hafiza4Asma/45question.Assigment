// Creating a Guest List Array
var guestList = ["hamza", "usman", "ayesha", "areeba"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// Print the name of guest who cant come
console.log(dontCome, "Nahi Ahh Sakty han");
// Add or Remove Values from Guest List Array
guestList.splice(0, 1, "Amirr");
// Message Print for Bigger Table
console.log("Good News ! We have Found a Bigger Table for Dinner.");
// Adding a new value at staring index of array 
guestList.unshift("ali");
// Adding a new value at endex of array
guestList.push("Zain");
// Get a middle index of our guest list array
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new uest to middle index of array
guestList.splice(middleIndex, 0, "osama");
// Print Message of Updated List
console.log("Updated List of our Guests");
// Sending a invitation message to our guests one by one with their names
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ",whould you like to dinner with me")); });
