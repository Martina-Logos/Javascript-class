//Nb: Make sure that every form you make you have the preventDefault method of the Event
//It's used to stop the default action associated with and the event from happening.

const form = document.getElementById("userForm");
const tableBody = document.querySelector("#userTable tbody");

form.addEventListener("submit", submitForm);

function submitForm(event){
event.preventFault();  
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;

//create a new row
const newRow = document.createElement("tr");
newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
//attach to table
tableBody.appendChild(newRow);
form.reset();            //clears the form so that it goes back to normal
}

