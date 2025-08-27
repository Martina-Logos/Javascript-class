// FUNCTIONAL PROGRAMMING PRINCIPLES
//Functional programming (FP) is a way of writing code where functions are the main building block.
//Some principles
          //a function always gives the same output for the same input.
          //It does not change anything outside itself (no side effects)

// Data
let products = [
    {name: "Timber", type: "Wood", price: 50, qty: 100},
    {name: "Dining Table", type: "Furniture", price: 800, qty: 3},
    {name: "Sofa", type: "Furniture", price: 1200, qty: 2},
    {name: "Bed", type: "Furniture", price: 600, qty:5}
];

//1. Functional Programming

function calculateValue(product) {
    return product.price * product.qty;
}

function showStockValue() {
    let total = products.reduce((sum, p) => sum + calculateValue(p), 0);
    document.getElementById("fpOutput").textContent =
    "Total Stock Value: " + total;
}

let premium = products
  .filter(p => p.price > 700)   // keep only items with price > 700
  .map(p => p.name)             // turn objects into just their names
  .join(",");                   // combine into one string

function showPremiumFurniture() {
    let premium = products.filter(p => p.price > 700).map(p => p.name).join(",");
    document.getElementById("fpOutput").textContent =
    "Premuim Furniture: " + premium;
}

// 2. High Order Functions

function applyFee(amount, feeFn) {
return feeFn(amount);
}
let addTransport = price => price * 1.05;
let applyDiscount = price => price * 0.9;

function calculateWithTransport() {
   let result = applyFee(1000, addTransport);
   document.getElementById("hofOutput").textContent =
   "With Transport Fee: " + result;
}

function calculateWithDiscount() {
    let result = applyFee(1000, applyDiscount);
    document.getElementById("hofOutput").textContent =
    "With Discount: " + result
}

// ----- 3. Closures -----
function salesCounter(agentName) {
  let count = 0;
  return function () {
    count++;
    return `${agentName} has made ${count} sale(s).`;
  };
}
let johnSale = salesCounter("John");
let marySale = salesCounter("Mary");

function johnSaleHandler() {
  document.getElementById("closureOutput").textContent = johnSale();
}
function marySaleHandler() {
  document.getElementById("closureOutput").textContent = marySale();
}

// ----- 4. Constructor vs Factory -----
function Product(name, type, price, qty) {
  this.name = name;
  this.type = type;
  this.price = price;
  this.qty = qty;
  this.getValue = function () {
    return this.price * this.qty;
  };
}
function createProduct(name, type, price, qty) {
  return {
    name,
    type,
    price,
    qty,
    getValue() {
      return this.price * this.qty;
    }
  };
}
function createWithConstructor() {
  let chair = new Product("Chair", "Furniture", 200, 10);
  document.getElementById("cfOutput").textContent = `Constructor: ${
    chair.name
  } value = ${chair.getValue()}`;
}
function createWithFactory() {
  let timber = createProduct("Timber", "Wood", 50, 100);
  document.getElementById("cfOutput").textContent = `Factory: ${
    timber.name
  } value = ${timber.getValue()}`;
}