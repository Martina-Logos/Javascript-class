const data = [
  //is the full list.
  { name: "Alice", age: 25, city: "Kampala" },
  { name: "Bob", age: 30, city: "Entebbe" },
  { name: "Carol", age: 22, city: "Jinja" },
  { name: "David", age: 28, city: "Mbarara" },
  { name: "Eve", age: 35, city: "Gulu" },
  { name: "Frank", age: 29, city: "Mbale" },
  { name: "Grace", age: 24, city: "Fort Portal" },
  { name: "Henry", age: 40, city: "Soroti" },
  { name: "Precious", age: 30, city: "Mbarara" },
];

let currentPage = 1; //tracks which page the user is on.
const rowsPerPage = 3; //is fixed at 3, so each page shows 3 people.

function renderTable(page, filteredData = data) {
  //filteredData = data is a default parameter: if you don’t pass a filtered list, it uses the full dataset.
  const tbody = document.querySelector("#myTable tbody");
  tbody.innerHTML = "";

  let start = (page - 1) * rowsPerPage; //index of first row to show
  let end = start + rowsPerPage; // index (non-inclusive) after last row
  let paginatedData = filteredData.slice(start, end);
  //start and end compute which slice of the array to show for the current page.
  //Page 1 → indices 0–2
  //Page 2 → indices 3–5

  // slice(start, end) takes just those rows.
  // It builds table rows with template strings and appends them.
  // Finally, it calls renderPagination(filteredData) so the page buttons always match whatever list you’re currently showing (full list or filtered list).

  paginatedData.forEach((row) => {
    let tr = `<tr>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.city}</td>
    </tr>`;
    tbody.innerHTML += tr;
  });

  renderPagination(filteredData);
}

// Note: innerHTML += in a loop is fine for small lists, but for larger tables you’d typically build one big string and assign tbody.innerHTML = builtString once, or create DOM nodes and append them (faster, safer against injection if using textContent).
function renderPagination(filteredData) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  let pageCount = Math.ceil(filteredData.length / rowsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = function () {
      currentPage = i;
      renderTable(currentPage, filteredData);
    };
    pagination.appendChild(btn);
  }
}
// It clears the pagination container, computes how many pages are needed, and creates that many buttons.
// Each button’s click handler:
// Updates currentPage to that button’s number.
// Calls renderTable with the same filteredData used to build the buttons.
// This is important: the closure here keeps the right filtered list tied to those buttons.
// If the filtered list changes (e.g., you type more in the search box), you re-render the table and rebuild the buttons, so everything stays in sync.

// Search feature
document.getElementById("searchInput").addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();
  let filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm) ||
      item.age.toString().includes(searchTerm)
  );
  currentPage = 1;
  renderTable(currentPage, filteredData);
});
// On every keystroke, it:
// Grabs the current text.
// Builds a filtered array where name, city, or age matches.
// Resets to page 1 (otherwise you could be stuck on a page number that no longer exists).
// Renders the table with that filtered list.

renderTable(currentPage); //Draws the first page (1) of the full dataset when the page loads.

/*
Common questions & edge cases
What if the search returns 0 results?
pageCount becomes 0, so no buttons are drawn and the table body stays empty. Consider showing a “No results” row to be friendlier (see improvement below).
What if I’m on page 3 then I type a search that has only 1 page?
You already reset currentPage = 1 in the search handler—perfect.
Is let i inside the loop safe in the click handler?
Yes. let is block-scoped, so each button’s click sees the correct i.
Performance concerns?
For small lists (dozens/hundreds), this is totally fine. For very large lists, you’d:
Avoid innerHTML += in a loop,
Use textContent and create elements to avoid injection risks,
Possibly debounce the search input.
*/

//Small, practical improvements
//Show “No results” when the filtered list is empty and highlight/disable the active page button.

/*
function renderTable(page, filteredData = data) {
  const tbody = document.querySelector("#myTable tbody");
  tbody.innerHTML = "";

  let start = (page - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let paginatedData = filteredData.slice(start, end);

  if (filteredData.length === 0) {
    tbody.innerHTML = <tr><td colspan="3" style="text-align:center;">No results found</td></tr>;
  } else {
    let rowsHtml = paginatedData.map(row => `
      <tr>
        <td>${row.name}</td>
        <td>${row.age}</td>
        <td>${row.city}</td>
      </tr>
    `).join("");
    tbody.innerHTML = rowsHtml;
  }

  renderPagination(filteredData);
}

function renderPagination(filteredData) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const pageCount = Math.ceil(filteredData.length / rowsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) {
      btn.disabled = true;                 // make current page obvious
      btn.setAttribute("aria-current", "page");
    }

    btn.onclick = function () {
      currentPage = i;
      renderTable(currentPage, filteredData);
    };
    pagination.appendChild(btn);
  }
}

*/

//Safer cell insertion
//If any data comes from users, avoid building HTML with raw values. Instead:
/*
const trEl = document.createElement("tr");
["name", "age", "city"].forEach(key => {
  const td = document.createElement("td");
  td.textContent = row[key];   // textContent prevents HTML injection
  trEl.appendChild(td);
});
tbody.appendChild(trEl);
*/

// Add Prev/Next buttons
//Create two extra buttons and update currentPage with bounds checks.
