var a = parseInt(prompt("Введите коэфициент a = "));
var b = parseInt(prompt("Введите коэфициент b = "));
var c = parseInt(prompt("Введите коэфициент c = "));


function getDescriminant() {
    var D = Math.pow(b, 2) - 4 * a * c;
   
    return D;
};
    var D = console.log("Дискриминант : " + getDescriminant());
    console.log(D);

function rootsOfQuadraticEquation() {
    if (D < 0) {
        alert("нет действительных корней");
        console.log("нет действительных корней");
    } else if (D == 0) {
        var x1 = -b / (2 * a);
        alert("Дискриминант : " + D + ", корень уровнения :" + x1);
        console.log("Дискриминант : " + D + ", корень уровнения :" + x1);
    } else if (D > 0) {
        var x1 = (-b + Math.sqrt(D)) / (2 * a);
        var x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert("Дискриминант : " + D + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);
        console.log("Дискриминант : " + D + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);

    } else {
        console.log("err");
    }
};

rootsOfQuadraticEquation();


