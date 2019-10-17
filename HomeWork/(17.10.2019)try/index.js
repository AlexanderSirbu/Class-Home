function getGender() {
    var gen = prompt("Your gender m (masculine) or f (feminine)?");
    if (gen === "m" || gen === "f") {
        
        return gen;
    } else {
        alert("somthing wrong");
    }

};


function getAge() {
    var age = parseInt(prompt("Say your age"));
    if (age > 0 && age < 99) {
        return age;
    } else {
        alert("somthing wrong, enter number");
    };
};

function getWeight(){   
    return  weight = parseInt(prompt("Ur weight")); 
};


function getHeight(){

     return height = parseInt(prompt("Ur height"));    
};





function calculatecalories(gender, age, weight, height){
if(gender === "m"){ 
     return x = 10 * weight + 6.25 * height + 5 * age + 5;
}else if(gender === "f"){     
     return x = 10 * weight + 6.25 * height + 5 * age -161;
}else{
alert("somthing wrong");
};

};


var gender = getGender();
var age = getAge();
var weight = getWeight();
var height = getHeight();
var totalcalories = calculatecalories(gender, age, weight, height);

document.getElementsByClassName("_gender")[0].innerText = " " + gender + " ";
document.getElementsByClassName("_age")[0].innerText = " " + age + " ";
document.getElementsByClassName("_weight")[0].innerText = " " + weight + " ";
document.getElementsByClassName("_height")[0].innerText = " " + height + " ";
document.getElementsByClassName("_total")[0].innerText = " " + totalcalories + " ";






