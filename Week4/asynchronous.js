//The Fetch API allows you to make network
//  requests (like loading data from a server) directly from JavaScript.
// GET request (load)
// fetch("https://randomuser.me/api/?results=5")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("https://randomuser.me/api/?results=5")
//   .then((response) => response.json())
//   .then((data) => {
//     data.results.forEach((user) => {
//       console.log(${user.name.first} ${user.name.last});
//     });
//   })
//   .catch((error) => console.error("Error fetching data:", error));

// POST request(send)
// fetch("https://jsonplaceholder.typicode.com/users", {
// //   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name: "John", age: 30 }),
// })
//   .then((response) => response.json())
//   .then((result) => console.log(result));

//   JSON (JavaScript Object Notation) is a format for sending and
//    receiving structured data. It’s widely used in APIs and web services.
//   const jsonString = '{"name":"Alice","age":25}';
// const user = JSON.parse(jsonString); // Convert JSON to object
// console.log(user.name); // Output: Alice

// const obj = { name: "Bob", age: 30 };
// const newJson = JSON.stringify(obj); // Convert object to JSON
// console.log(newJson); // Output: {"name":"Bob","age":30}

//Web Storage (localStorage & sessionStorage)
//These are built-in browser features that allow you to store data in the user's browser.

// localStorage: Data persists even after the browser is closed.
// sessionStorage: Data is lost when the tab or browser is closed.
// Save data
// localStorage.setItem('username', 'John');
// sessionStorage.setItem('token', 'abc123');

// Retrieve data
// console.log(localStorage.getItem('username')); // Output: John
// console.log(sessionStorage.getItem('token')); // Output: abc123

// Remove data
// localStorage.removeItem('username');
// sessionStorage.clear(); // Removes all sessionStorage items

//Combining Async Code with DOM Updates
//This involves fetching or processing data
// asynchronously and then updating the HTML (DOM) based on that data.
// fetch("https://api.example.com/user")
//   .then((response) => response.json())
//   .then((user) => {
//     document.getElementById("name").textContent = user.name;
//   });
