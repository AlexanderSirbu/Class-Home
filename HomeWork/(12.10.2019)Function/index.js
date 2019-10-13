var a = parseInt(prompt("Введите коэфициент a = "));
var b = parseInt(prompt("Введите коэфициент b = "));
var c = parseInt(prompt("Введите коэфициент c = "));


function getDescriminant() {
    

    // return D;
    // can write like this
    return Math.pow(b, 2) - 4 * a * c
   
};

// we can now call our function and assign result to value
var descriminant = getDescriminant();
console.log(descriminant);
// then we can pass it to next function
rootsOfQuadraticEquation(descriminant);

// here we don't need this

// until here

function rootsOfQuadraticEquation(descriminant) {
    if (descriminant < 0) {
        alert("нет действительных корней");
        console.log("нет действительных корней");
        // here we need to return nothing, just simple 'return;'
    } else if (descriminant == 0) {
        var x1 = -b / (2 * a);
        alert("Дискриминант : " + descriminant + ", корень уровнения :" + x1);
        console.log("Дискриминант : " + descriminant + ", корень уровнения :" + x1);
    } else if (descriminant > 0) {
        var x1 = (-b + Math.sqrt(descriminant)) / (2 * a);
        var x2 = (-b - Math.sqrt(descriminant)) / (2 * a);
        alert("Дискриминант : " + descriminant + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);
        console.log("Дискриминант : " + descriminant + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);

    } else {
        console.log("err");
    }
};