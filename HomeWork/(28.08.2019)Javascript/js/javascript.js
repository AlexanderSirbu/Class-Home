console.log("");
console.log("Second Part of HomeWork");
console.log("Typeof 6 data types");
console.log("");
//variable
var myCurrentAge = 27;
var Birthday = 10 / 08 / 1992;
var Name = "Alexandru";
var True = false;
var Salut; //or Salut = Salut
var Name_Date_Gen = ["Alex", "10/08/1992", "Masculin"];
var nothing = null;
var car = {
    "modal": "BMW X3",
    "color": "white",
    "doors": 5
}
var greeting = function() {
        return "Hello World!";
    }
    //console.log
console.log(typeof Birthday);
console.log(typeof Name);
console.log(typeof True);
console.log(typeof Salut);
console.log(typeof Name_Date_Gen);
console.log(typeof nothing);
console.log(typeof car);
console.log(typeof greeting);

console.log("");
console.log("Exemple with 'if'");

if (myCurrentAge <= 25) {
    console.log("I am over 25 years old");
} else {
    console.log("I am under 25");
}
console.log("");
console.log("Exemple with 'Ternary'");

var result = (myCurrentAge <= 27) ? "I am over 25 years old" : "I am under 25";
console.log(result);