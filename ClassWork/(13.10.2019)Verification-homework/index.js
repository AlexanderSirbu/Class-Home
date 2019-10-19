// Lesson Plan:

// Review of HW
// Examples of simple functions 2.1 Create a function that return fullName 2.2 Create a greeting function that accepts fullName param, and return a greeting message 2.3 Create a function that accepts a number and reverses it; 2.4 Create a functiona that accepts a word, and return alphabetized string from it.
// Eslint install 3.1 Configuration 3.2 Check some rules 3.3 Try to fix

// old homework
var product = prompt("please enter name")
var quantity = parseInt(prompt("please enter quantity"))

var products = [{
  name: "Bread",
  price: 2.5
},
{
  name: "Bananas",
  price: 5
},
{
  name: "Water",
  price: 3
}
]
function getProductFromList (productName) {
  return products.filter(function (products) {
    return products.name === productName
  })[0]
};

function calculateTotal (price, quantity) {
  return price * quantity
};

var selectedProduct = getProductFromList(product)
var totalCost = calculateTotal(selectedProduct.price, quantity)

function calculateWithTVA (totalCost) {
  return totalCost + totalCost * 0.2
};

function updateUITotalCost (totalCost) {
  document.getElementById("your-total-price").innerText = calculateWithTVA(totalCost)
};

updateUITotalCost(totalCost)

// console.log(totalCost);
// console.log(selectedProduct);
// console.log(product, quantity);
// разобраться
