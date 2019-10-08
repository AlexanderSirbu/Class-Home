// 1. Try to Access documents title and change it to: "Today we manipulate with DOM"
document.getElementsByTagName("title")[0].text = "Today we manipulate with DOM";

// 2. Ask user question id="question-frontend" (suggestion: use confirm()), and then insert answer in id="answer-frontend"
//    Use if/else to set value as YES or NO.
var answerFrontend = confirm("Do you like frontend?");
var answerFrontendPlaceholder = document.getElementById("answer-frontend");

if (answerFrontend === true) {
    answerFrontendPlaceholder.innerText = "Yes";
} else {
    answerFrontendPlaceholder.innerText = "No";
}
// 3. Get a product from user(promt), and then insert it to .shopping-list.

var userProduct = prompt("Please select product to add in the list");
var userProductAnswer = document.getElementsByClassName("shopping-list")[0];
var liElement = document.createElement("li");
liElement.innerText = userProduct;
userProductAnswer.appendChild(liElement);

// 4. Remove item "Bread"

var parent = document.getElementsByClassName("shopping-list")[0],
    child = document.getElementsByTagName("li");

parent.removeChild(child[2]);


// 5. Promt item, then promt price, then calculate price and set it to, id="your-total-price".
var questionPriceCarrot = +prompt("Tell me the price for the purchased Carrot");
var questionPriceCheesse = +prompt("Tell me the price for the purchased Chesse");
var questionPrice = +prompt("Tell me the price for the purchased "+ userProduct);
var total = questionPrice + questionPriceCheesse + questionPriceCarrot;

 document.getElementById("your-total-price").innerText = total;

