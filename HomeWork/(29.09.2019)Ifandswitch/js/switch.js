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