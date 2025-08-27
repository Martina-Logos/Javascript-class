//The Spread Operator
//Is a feature in ES6 that takes arrays and spreads them into individual elements
var stock = ["Clocks", "Chairs", "Crates"];
//console.log(stock); //When you log to the console, you'll notice the stock array
console.log(...stock); //Here it spreads the components into individual components

//The spread operator is just 3 dots.
var vehicles = ["Truck", "Vans", "Bus"];
console.log(...vehicles);
//We've used the spread operator and its going to display the vehicles as individual components.

// Few different ways of using the spread operator
var qty1 = [1, 2, 3];
var qty2 = [4, 5, 6];
console.log(qty2);

//This were we add an array within another. This nums1 array just occupies a postion in the nums2 array
var qty1 = [1, 2, 3];
var qty2 = [qty1, 4, 5, 6];
console.log(qty2);

//When you want to spread the array into individual components. When consoled, it gives us a one dimensional array
var qty1 = [1, 2, 3];
var qty2 = [...qty1, 4, 5, 6];
console.log(qty2);

//Create a function to add numbers together
var nums = [3,5,7];
function addNums(a,b,c){
  console.log(a+b+c);
}
 //You will get it as undefined. Why? It's expecting 3 variables to show up and not one.
addNums(nums)

//So.... I'm using the spread operator now
addNums(...nums); 
//With this i'll be able to get the total of 3,5,7






// REST OPERATORS

// function openShowroom(...product){  //Take an example all of these products are in a showroom
// console.log(product);
// }
//   const product1 = "Dining Tables";
//   const product2 = "Cupboards";
//   const product3 = "Shelves";
//   const product4 = "Cutlery";
//   const product5 = "Trays";
//   const product6 = "Beds";

// openShowroom(product1, product2, product3, product4, product5, product6);


// When combined together?
// I can display all my separate elements

// function openShowroom(...product){  //rest parameters
//   console.log(...product); //spread parameters
// }
// const product1 = "Dining Tables";
// const product2 = "Cupboards";
// const product3 = "Shelves";
// const product4 = "Cutlery";
// const product5 = "Trays";
// const product6 = "Beds";

// openShowroom(product1, product2, product3, product4, product5, product6);

// Rest parameters can also be used to stick out all elements in an array
// function openShowroom(...products) {
//   console.log(...products); 
// }
// // //Use a seperate function
function getProduct(...products) {
  return products;
}

const product1 = "Dining Tables";
const product2 = "Cupboards";
const product3 = "Shelves";
const product4 = "Cutlery";
const product5 = "Trays";
const product6 = "Beds";

// openShowroom(product1, product2, product3, product4, product5, product6);

const products = getProduct(product1, product2, product3, product4, product5, product6);
console.log(products);

