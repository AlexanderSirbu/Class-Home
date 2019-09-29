document.getElementById("callif").onclick = function () {
    var work = prompt("Write any day of the week");

    if(work == "Monday"){
    alert("working day");
    }else if (work == "Tuesday"){
        alert("working day");
    }else if (work == "Wednesday"){
        alert("working day");
    }else if (work == "Thursday"){
        alert("working day");
    }else if (work == "Friday"){
        alert("working day");
    }else if(work == "Saturday"){
        alert("weekend day");
    }else if(work == "Sunday"){
        alert("weekend day");
    
    }else{
        alert("Can not define,please try another value!");
    } 
}

document.getElementById("callswitch").onclick = function () {
    var work = prompt("Write any day of the week")

    switch(work){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":        
            alert("It's a working day");
            break;
        case"Saturday":
        case"Sunday":
            alert("It's a weekend day")
            break;
        default:
            alert("Can not define,please try another value!");
    }  
}
