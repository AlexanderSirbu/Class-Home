
var firstName = prompt("Enter ur first name");
var secondName = prompt("Enter ur second name");

// 2.1 Create a function that return fullName
function getFullName(){
    return firstName + " " + secondName;
};
//2.2 Create a greeting function that accepts 
//fullName param, and return a greeting message
function greetings(greetingsWithThatPerson){
    return "Hello, " + greetingsWithThatPerson;
};
// 2.3 Create a function 
// that accepts a number and reverses it;
function enterANumber(){
    return prompt("Say a couple of numbers, and I have them inverses");
};

function getInverseNumbers(numbersThatNeedInverses){
    return numbersThatNeedInverses.split('').reverse().join('');
};

function enterAWords(){
    return prompt("Say a couple of words, and I have them inverses");
};
// 2.4 Create a functiona that accepts a word,
//  and return alphabetized string from it.
 
var getfullnames = getFullName();
var getGreetinsWith = greetings(getfullnames);
var getNumbers = enterANumber();
var getWords = enterAWords();
var getInversNumber = parseInt(getInverseNumbers(getNumbers));
var getInversWords = getInverseNumbers(getWords);

console.log(getfullnames);
console.log(getGreetinsWith);
console.log(getInversNumber);
console.log(getInversWords);



