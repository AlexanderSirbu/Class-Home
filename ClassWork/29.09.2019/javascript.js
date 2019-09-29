var product = prompt('what do u like to order?');


switch(product) {
    case "Oranges":
        console.log("Oranges are $0.59 a pound.");
        break;
    case "Apples":
        console.log("Apples are $0.32 a pound.");
        break;
    case "Bananas":
        console.log("Bananas are $0.48 apound");
        break;
    case "Cherries":
        console.log("Cherries are $3.00 apound");
        break;
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.59 a pound");
        break;
    default:
        console.log("Sorry,we are out og " + ".");
}
console.log("If there anything else you'd like?");