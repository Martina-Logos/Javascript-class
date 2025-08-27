// Furniture Workshop
/*Imagine a furniture workshop that:

Tracks inventory with product codes (e.g., "CHR-123" for a chair, "TBL-456" for a table).
Processes customer orders with descriptions (e.g., "Wooden Table 4x2").
Validates customer contact information (e.g., emails, phone numbers).
Replaces or extracts specific details in text (e.g., updating prices or extracting dimensions).

Below, I’ll organize the regex concepts into practical code examples for these use cases.
*/

// 1. Literal Characters
// Use Case: Match a specific furniture item in an order description.
// Matches the exact string "chair" in an order description
const chairRegex = "/chair/";
const order = "Customer ordered a chair and table";
console.log(chairRegex.test(order)); // true
console.log(order.match(chairRegex)); // ["chair", index: 17, input: "Customer ordered a chair and table", groups: undefined]

2; //Metacharacters
// . matches any single character in a product code (e.g., CHR-1X3)
// Matches "CHR-123", "CHR-1A3", etc.
const dotRegex = "/CHR-1.3/";
console.log(dotRegex.test("CHR-123")); // true
console.log(dotRegex.test("CHR-1A3")); // true

// \d matches any digit in a product code
const digitRegex = "/\d/";
console.log(digitRegex.test("CHR-123")); // true (matches any digit in "123")

// \w matches word characters in a furniture name
const wordRegex = "/\w+/";
console.log("Wooden_Chair".match(wordRegex)); // ["Wooden_Chair"]

// \s matches whitespace in an order description
const spaceRegex = "/\s/";
console.log("Wooden Table".match(spaceRegex)); // [" "] (matches space between Wooden and Table)

// ^ matches start of a product description
const startRegex = "/^Table/";
console.log(startRegex.test("Table Wooden 4x2")); // true
console.log(startRegex.test("Wooden Table")); // false

// $ matches end of a product code
const endRegex = "/-\d{3}$/";
console.log(endRegex.test("CHR-123")); // true
console.log(endRegex.test("CHR-1234")); // false

// * matches 0 or more letters in a custom engraving
const zeroOrMore = "/engrav.*e/";
console.log(zeroOrMore.test("engrave")); // true
console.log(zeroOrMore.test("engraving_message")); // true

// + matches 1 or more digits in a product code
const oneOrMore = "/\d+/";
console.log("TBL-456".match(oneOrMore)); // ["456"]

//? matches 0 or 1 occurrence of an optional suffix
const regex = "/chair(s)?/";
const joan = regex.exec("chair");
const joan2 = regex.test("");
console.log("joan"); // true
console.log("chair"); // true

// | matches either "chair" or "table"
const orRegex = "/chair|table/";
console.log(orRegex.test("Order: table")); // true
console.log(orRegex.test("Order: sofa")); // false
console.log();

3; //Character Classes
// [CTS] matches C (chair), T (table), or S (sofa) in a product code
const productClass = "/[CTS][a-zA-Z]{2}-\d{3}/";
console.log(productClass.test("CHR-123")); // true
console.log(productClass.test("TBL-456")); // true

// [a-z] matches lowercase letters in a material description
const materialRegex = "/[a-z]+/";
console.log("wooden".match(materialRegex)); // ["wooden"]

// [0-9] matches digits in a quantity
const quantityRegex = "/[0-9]+/";
console.log("Order: 5 chairs".match(quantityRegex)); // ["5"]

// [^0-9] matches non-digits in a description
const nonDigitRegex = "/[^0-9]/";
console.log("Table4x2".match(nonDigitRegex)); // ["T"] (first non-digit)

4; //Capture Groups
// Extract parts of an order description, like furniture type and dimensions.
// Captures furniture type and dimensions (e.g., "Table 4x2")
const orderRegex = "/(\w+)\s(\d+x\d+)/";
const rsult = orderRegex.exec("Table 4x2");
console.log(result); // ["Table 4x2", "Table", "4x2", index: 0, input: "Table 4x2", groups: undefined]

// Named groups to capture furniture type and material
const namedRegex = "/(?<type>\w+)\s(?<material>\w+)/";
const namedResult = namedRegex.exec("Chair Wooden");
console.log(namedResult.groups); // { type: "Chair", material: "Wooden" }

5; // Quantifiers
// Match specific counts of characters, like digits in product codes or quantities.
// {3} matches exactly 3 digits in a product code (e.g., CHR-123)
const exactThree = "/\d{3}/";
console.log(exactThree.test("CHR-123")); // true
console.log(exactThree.test("CHR-12")); // false

// {2,4} matches 2 to 4 digits in a custom order number
const rangeDigits = "/\d{2,4}/";
console.log(rangeDigits.test("Order-123")); // true
console.log(rangeDigits.test("Order-12345")); // true (matches "1234")

// {2,} matches at least 2 digits in a quantity
const atLeastTwo = "/\d{2,}/";
console.log(atLeastTwo.test("Order: 123 chairs")); // true

6; //Escaping Special Characters
//Match literal special characters in product descriptions (e.g., periods or hyphens).
javascript; // Matches a literal hyphen in a product code
const literalHyphen = "/TBL\-\d{3}/";
console.log(literalHyphen.test("TBL-123")); // true
console.log("TBL-123".match(literalHyphen)); // ["TBL-123"]

7; //Common Use Cases in a Furniture Workshop
// Validate customer email for order confirmation
const emailRegex = "/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/";
console.log(emailRegex.test("customer@furniture.com")); // true
console.log(emailRegex.test("invalid.email")); // false

// Extract phone number for delivery contact (format: 123-456-7890)
const phoneRegex = "/\d{3}-\d{3}-\d{4}/";
console.log("Contact: 123-456-7890".match(phoneRegex)); // ["123-456-7890"]

// Replace prices with a placeholder in a catalog
const priceRegex = "/\$\d+/g";
console.log("Chair $50, Table $100".replace(priceRegex, "$")); // "Chair $, Table $*"

// Validate order code (e.g., ORD-12345-A, at least 5 chars after hyphen)
const orderCodeRegex = "/^ORD-\w{5,}$/";
console.log(orderCodeRegex.test("ORD-12345-A")); // true
console.log(orderCodeRegex.test("ORD-123")); // false

8; //Flags
// Modify regex behavior for case-insensitive matching or global searches.
javascript; // Global flag (g) to find all product codes
const globalRegex = "/[CTS][A-Z]{2}-\d{3}/g";
console.log("CHR-123 TBL-456".match(globalRegex)); // ["CHR-123", "TBL-456"]

// Case-insensitive flag (i) for furniture types
const caseInsensitive = "/chair/i";
console.log(caseInsensitive.test("CHAIR")); // true

// Combine global and case-insensitive for material search
const combinedFlags = "/wood|oak/gi";
console.log("Wood Oak wood".match(combinedFlags)); // ["Wood", "Oak", "wood"]

// Multiline flag (m) for processing order lists
const multilineRegex = "/^CHAIR/m";
const orderList = "CHAIR-123\nTABLE-456\nCHAIR-789";
console.log(orderList.match(multilineRegex)); // ["CHAIR", "CHAIR"]

9; // Practice Exercises for Furniture Workshop
// 1. Match order date in MM/DD/YYYY format
const dateRegex = "/\d{2}\/\d{2}\/\d{4}/";
console.log(dateRegex.test("Delivery: 12/31/2023")); // true

// 2. Find furniture types starting with a capital letter
const capWordRegex = "/[A-Z]\w*/g";
console.log("Chair Table Sofa".match(capWordRegex)); // ["Chair", "Table", "Sofa"]

// 3. Replace material vowels with * in descriptions
const vowelRegex = "/[aeiou]/gi";
console.log("Wooden Oak".replace(vowelRegex, "")); // "W*d*n **k"

// 4. Validate product color code (e.g., #FF0000 or #FFF)
const colorRegex = "/^#[0-9A-Fa-f]{3,6}$/";
console.log(colorRegex.test("#FF0000")); // true (valid for furniture finish)
console.log(colorRegex.test("#GGG")); // false

10; //Revisiting Original Code
// Extract furniture type and material from an order description.
javascript; // Original code adapted for furniture
const regx = "/(\w+)\s(\w+)/";
const result = regex.exec("Chair Wooden");
console.log(result); // ["Chair Wooden", "Chair", "Wooden", index: 0, input: "Chair Wooden", groups: undefined]

// Modified to allow multiple spaces and case-insensitive
const modifiedRegex = "/(\w+)\s+(\w+)/i";
console.log(modifiedRegex.exec("Table   Oak")); // ["Table   Oak", "Table", "Oak", index: 0, input: "Table   Oak", groups: undefined]

// Running the Code
// As discussed previously, you can run these examples in:

// Browser Console: Open DevTools (Ctrl+Shift+I), go to the Console tab, and paste the code. Great for quick tests.
// Node.js Terminal:

// Install Node.js (nodejs.org).
// Save the code in a file (e.g., furniture_regex.js).
// Run node furniture_regex.js in a terminal.

// Regex Testers: Use regex101.com to test patterns (e.g., /[CTS][A-Z]{2}-\d{3}/) against sample data like "CHR-123 TBL-456".

// Example:
// To test the product code regex in a browser:
// javascriptconst productRegex = /[CTS][A-Z]{2}-\d{3}/;
// console.log(productRegex.test("CHR-123")); // true
// Or save it in furniture.js and run node furniture.js in a terminal.

// Furniture Workshop Tips

// Start Simple: Test basic patterns like /chair/ on order descriptions before trying complex ones like /[CTS][A-Z]{2}-\d{3}/.
// Use Regex101: Paste patterns and test strings (e.g., "CHR-123 TBL-456") to visualize matches.
// Break Down Patterns: For example, [CTS][A-Z]{2}-\d{3} means:

// [CTS]: Chair, Table, or Sofa.
// [A-Z]{2}: Two uppercase letters.
// -: Literal hyphen.
// \d{3}: Three digits.

// Practice: Try writing regex to validate custom furniture dimensions (e.g., "4x2x3") or extract order IDs.

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Get values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("password").value.trim();

  // Patterns
  let namePattern = "/^[A-Z][a-z]+$/";
  let emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
  let phonePattern = "/^\+256\s7\d{2}\s\d{3}\s\d{3}$/";
  let passwordPattern = "/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/";

  // Error spans
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let phoneError = document.getElementById("phoneError");
  let passwordError = document.getElementById("passwordError");

  let valid = true;

  // Name check
  if (!namePattern.test(name)) {
    nameError.textContent =
      "Name must start with uppercase and contain only letters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email check
  if (!emailPattern.test(email)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Phone check
  if (!phonePattern.test(phone)) {
    phoneError.textContent = "Phone must be like +256 7XX XXX XXX.";
    valid = false;
  } else {
    phoneError.textContent = "";
  }

  // Password check
  if (!passwordPattern.test(password)) {
    passwordError.textContent =
      "Password must have chars, upper, lower, digit +8";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // If all valid
  if (valid) {
    alert("Form submitted successfully!");
    // Here you could send data to server
  }
});
