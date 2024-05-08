// creating a array
var userNames = ["mahad", "ali", "zeeshan", "admin", "usman"];
// using foreach loop on array
userNames.forEach(function (oneUser) {
    if (oneUser === "admin") {
        console.log("hello ".concat(oneUser, ", whould you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneUser, ", thank you for logging in again."));
    }
});
