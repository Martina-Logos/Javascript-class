// let userName ={
//     firstName : "Precious",
//     secondName : "Mary"
// }

//Classes
//A class is a template for creating objects
// class Person{
//  constructor(firstName, lastName){
//    firstName = firstName,
//    lastName = lastName
//  }
// }
// const person1 = new Person()
// console.log(person1)

class Furniture {
  constructor(productName, price, stock) {
    this.productName = productName;
    this.price = price;
  }
  stock() {
    console.log(stock);
  }
}
let chair = new Furniture();
let table = new Furniture();
let cupboard = new Furniture();

//let person1 = {}
