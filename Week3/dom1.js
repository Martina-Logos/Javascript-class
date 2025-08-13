console.log(document.title);
console.log("my file is connected")
console.log(document.body);
console.log(document.forms);
console.log(document.links);

let heading = document.getElementById("heading")
console.log(heading)
heading.textContent="WELCOME TO MAYONDO"
heading.style.color="grey"
console.log(heading)

let header = document.getElementById("first")
header.innerHTML = "<h2>For Quality Furniture Products</h2>"

//EVENTS
//More DOM Methods
//a) document.getElementsByTagName()
let subHeadings=document.getElementsByTagName("h2")
console.log(subHeadings)

for (let i=0; i,subHeadings.length; i++){
    console.log(subHeadings[i])
}

// b) document.getElementsByClassName()
let paragraph= document.getElementsByClassName("about")
console.log(paragraph.length)

/*document.querySelector() this works exactly like css by picking the first element with the id
let thirdTitle=document.querySelector("h3");
let thirdTitle=document.querySelector("#thirdTitle");
let thirdTitle=document.querySelector(".thirdTitle");
*/

document.querySelectorAll() //this captures everything by class 

document.createElement()
 