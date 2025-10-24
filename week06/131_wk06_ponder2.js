
/******************************************************
 * GPA Calculator - JS Functions Ponder Activity
 * ----------------------------------------------------
 * This program demonstrates how to:
 * - Get user input from an HTML form
 * - Process text into an array
 * - Use functions to organize logic (DRY principle)
 * - Calculate and display a GPA result
 ******************************************************/

// 🟢 Function 1: Get the grades from the input box
function getGrades(inputSelector) {
  // Step 1: Find the input box using a CSS selector (like '#grades')
  const inputElement = document.querySelector(inputSelector);

  // Step 2: Read whatever the user typed into the box
  const gradesString = inputElement.value;

  // Step 3: Split the string into an array by commas
  // "A, B, a" becomes ["A", " B", " a"]
  let gradesArray = gradesString.split(",");

  // Step 4: Clean up extra spaces and make all letters uppercase
  // Example: " b " -> "B"
  gradesArray = gradesArray.map(grade => grade.trim().toUpperCase());

  // Step 5: Return the cleaned array
  return gradesArray;
}

// 🟢 Function 2: Convert letter grade → GPA points
function lookupGrade(grade) {
  // You can add more if you want to include +/- later
  if (grade === "A") return 4.0;
  else if (grade === "B") return 3.0;
  else if (grade === "C") return 2.0;
  else if (grade === "D") return 1.0;
  else return 0.0; // F or invalid input
}

// 🟢 Function 3: Calculate the GPA
function calculateGpa(grades) {
  // Step 1: Convert letter grades to numeric points
  const points = grades.map(lookupGrade);

  // Step 2: Add up all the point values
  const totalPoints = points.reduce((sum, value) => sum + value, 0);

  // Step 3: Find the average by dividing total points by number of grades
  const gpa = totalPoints / points.length;

  // Step 4: Round to 2 decimal places
  return gpa.toFixed(2);
}

// 🟢 Function 4: Display the GPA on the webpage
function outputGpa(gpa, selector) {
  const outputElement = document.querySelector(selector);
  outputElement.textContent = `Your GPA is ${gpa}`;
}

// 🟢 Function 5: Handle the button click
function clickHandler() {
  // Step 1: Get grades from the input box
  const grades = getGrades("#grades");

  // Step 2: Calculate the GPA from those grades
  const gpa = calculateGpa(grades);

  // Step 3: Display the GPA on the page
  outputGpa(gpa, "#output");
}

// 🟢 Event listener - waits for button click, then runs clickHandler()
document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);
