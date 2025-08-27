const API = "https://jsonplaceholder.typicode.com/users";
const out = document.getElementById("output");

// GET → fetch data
async function getUsers() {
  const res = await fetch(API);
  out.innerText = "GET:\n" + JSON.stringify(await res.json(), null, 2);
}

// POST → add new data
async function addUser() {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Treasure", email: "treasure@example.com" }),
  });
  out.innerText = "POST:\n" + JSON.stringify(await res.json(), null, 2);
}

// PUT → replace data
async function updateUser() {
  const res = await fetch(`${API}/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Updated Treasure",
      email: "updated@example.com",
    }),
  });
  out.innerText = "PUT:\n" + JSON.stringify(await res.json(), null, 2);
}

// PATCH → update part of data
async function patchUser() {
  const res = await fetch(`${API}/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "patched@example.com" }),
  });
  out.innerText = "PATCH:\n" + JSON.stringify(await res.json(), null, 2);
}

// DELETE → remove data
async function deleteUser() {
  await fetch(`${API}/1`, { method: "DELETE" });
  out.innerText = "DELETE:\nUser with ID=1 deleted";
}