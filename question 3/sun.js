var persoName = "fatima";
console.log(persoName.toLowerCase());
console.log(persoName.toUpperCase());
console.log(persoName.replace(/\b\w/g, function (beauty) { return beauty.toUpperCase(); }));
