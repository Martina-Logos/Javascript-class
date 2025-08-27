// Save to Local Storage
function saveLocal() {
  let name = document.getElementById("username").value;
  localStorage.setItem("username", name); // name is automatically converted to a string
  alert("Saved to Local Storage!");
}

// Save to Session Storage
function saveSession() {
  let name = document.getElementById("username").value;
  sessionStorage.setItem("username", name);
  alert("Saved to Session Storage!");
}

// Show stored data from both
function showData() {
  let localName = localStorage.getItem("username");
  let sessionName = sessionStorage.getItem("username"); // helps the local item to remember when to bring back what you stored

  document.getElementById(
    "output"
  ).innerHTML = `<strong>Local Storage:</strong> ${localName}<br>
     <strong>Session Storage:</strong> ${sessionName}`;
}

// | Feature           | Local Storage                             | Session Storage                      |
// | ----------------- | ----------------------------------------- | ------------------------------------ |
// | Data Lifetime | Stays until manually deleted              | Disappears when tab is closed        |
// | Storage Size  | \~5–10 MB                                 | \~5–10 MB                            |
// | Scope         | Shared across all tabs of the same origin | Only available in the tab it was set |
// | Use Case      | Persistent user preferences, saved data   | Temporary data during a session      |

// Real-life analogy:

// Local Storage = like writing in a notebook and keeping it on your desk forever.

// Session Storage = like writing on a sticky note that you throw away when you leave the room.

// set.item is when you are savind te data on your storage where session or local, get.item is like retrieving data you stored on your storage
