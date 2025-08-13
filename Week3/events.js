/*What are events?
It's a triggered action by a user or browser which can result into signals, notifications e.t.c
Key words
1. Event listening: Click (buttons are always watching/ listening to an event)
2.Event handling: It's that function that happens after the listening. 

let button = document.getElementById("btn") //This is for selelcting the button

button.addEventListener("click", ()=> //This line is for adding a funciton to the button
    window.alert("You have clicked a button")
);
*/

const form = document.getElementById("orderForm")
const furniture = document.getElementById("furniture")
const customer = document.getElementById("customer")
const total = document.getElementById("total");
const calcBtn = document.getElementById("calcBtn");

function updateTotal(){
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;

    let cost = price * qty;
    total.textContent = `Total: UGX ${cost.toLocaleString()}`;
}
//calcBtn.addEventListener("click", updateTotal);
qty.addEventListener("input", updateTotal);
price.addEventListener("input", updateTotal);


