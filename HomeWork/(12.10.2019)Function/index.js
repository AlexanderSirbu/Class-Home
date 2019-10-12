var a = parseInt(prompt("Введите коэфициент a = "));
var b = parseInt(prompt("Введите коэфициент b = "));
var c = parseInt(prompt("Введите коэфициент c = "));
var D, x1, x2;

function getDescriminant() {
    D = Math.pow(b, 2) - 4 * a * c;
    console.log("Дискриминант : " + D);
};

function rootsOfQuadraticEquation() {
    if (D < 0) {
        alert("нет действительных корней");
        console.log("нет действительных корней");

    } else if (D == 0) {
        x1 = -b / (2 * a);
        alert("Дискриминант : " + D + ", корень уровнения :" + x1);
        console.log("Дискриминант : " + D + ", корень уровнения :" + x1);
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        alert("Дискриминант : " + D + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);
        console.log("Дискриминант : " + D + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);

    } else {
        console.log("err");
    }
};
getDescriminant();
rootsOfQuadraticEquation();