//Запросить число x которое нужно возвести в степень: prompt
var x = +prompt("Напишите число x которое нужно возвести в степень");
//Запросить степень n в которую нужно возвести число
var n = prompt("Напишите степень n в которую нужно возвести число");
//Преобразовать введенные строки в числа:
var nint = Number.parseInt(n);  
// console.log(typeof x);
// console.log(typeof nint);
// // Вычислить результат : Math.pow
var y = Math.pow(x,nint);

// console.log(y);
// Вывести строку результата на страницу в элемент div > h2 и через alert()
// в следующем формате:
var divCreate = document.createElement('div');
var h2Create = document.createElement('h2');
document.body.append(divCreate);
divCreate.append(h2Create);
h2Create.innerText = "Result of x = " + x +" in power of n = " + nint + " equals " + y;
h2Create.style = "font-weight:normal";
alert("Result of x = " + x +" in power of n = " + nint + " equals " + y);