// define a function to print each magician name from an array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
// function make to make magicians great through map.() it will modify array 
function make_great(magacians) {
    return magacians.map(function (name) { return "The Great ".concat(name); });
}
// define an array containing magician name
var magician_names = ["harry poter", "fatima", "hamza"];
// call make_great function to modify magicians names
var great_magicians = make_great(magician_names);
// call show_magicians that show modifed list ofmagicians
show_magician(great_magicians);
