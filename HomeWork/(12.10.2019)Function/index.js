// function main(){
//     var a = 2+2;

// }
// console.log(main);
function main() {
    var a = +prompt("Введите коэфициент a = ");
    var b = +prompt("Введите коэфициент b = ");
    var c = +prompt("Введите коэфициент c = ");
    var x1, x2;
    var D = Math.pow(b, 2) - 4 * a * c;

    if (a > 1 ) {
       a = 1 ;
    } else if (D < 0) {
        console.log("нет действительных корней");
    } else if (D == 0) {
        x1 = -b / (2 * a);
        console.log("Дискриминант : " + D + ", корень уровнения :" + x1);
    } else if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        console.log("Дискриминант : " + D + " , корень уровнения x1 : " + x1 + ", корень уровнения  x2 : " + x2);
    
    } 
    
};
console.log(main());
//console.log(main(22,33,66));