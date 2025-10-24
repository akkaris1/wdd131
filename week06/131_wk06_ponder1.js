

/***************************************
 * Activity 1 - Map (make an HTML list)
 ***************************************/

// Start with a simple array of words
     //const steps = ["one", "two", "three"];

// This function takes a string like "one"
// and returns an HTML list item like "<li>one</li>"
     // function listTemplate(step) {
  // Template literals let us embed the value directly into the string
      //return `<li>${step}</li>`;
  //  }

// map() creates a *new* array by calling listTemplate()
// once for each item in the steps array.
     //const stepsHtml = steps.map(listTemplate);

// join("") combines the list of <li> strings into one continuous block
// (without commas — that’s why the empty quotes are important!)
   // document.querySelector("#myList").innerHTML = stepsHtml.join("");

/*
  When this code runs, the <ul id="myList"> will end up like this:
  <ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
*/



/**********************************************
 * Activity 2 - Map (convert grades to GPA)
 **********************************************/

// Start with an array of letter grades
const grades = ["A", "B", "A"];

// This function takes a letter (e.g., "A")
// and returns the number of grade points.
function convertGradeToPoints(grade) {
  // We’ll use simple if statements to decide what each grade is worth
  if (grade === "A") return 4;
  else if (grade === "B") return 3;
  else if (grade === "C") return 2;
  else if (grade === "D") return 1;
  else return 0; // anything else (like "F") is zero points
}

// map() again creates a new array, calling convertGradeToPoints()
// for each letter in the grades array.
const gpaPoints = grades.map(convertGradeToPoints);

console.log("GPA points for each grade:", gpaPoints);
// Output should be: [4, 3, 4]



/**********************************************
 * Activity 3 - Reduce (calculate average GPA)
 **********************************************/

// reduce() takes all the numbers in gpaPoints and adds them together.
// The first argument (sum) keeps track of the running total.
// The second (current) is the current value from the array.
const totalPoints = gpaPoints.reduce((sum, current) => sum + current, 0);

// Divide the total by the number of items to get the average GPA.
const gpa = totalPoints / gpaPoints.length;

console.log("Average GPA:", gpa.toFixed(2));
// Output should be: Average GPA: 3.67



/**********************************************
 * Activity 4 - Filter (keep short fruit names)
 **********************************************/

// Here’s a list of fruits.
const fruits = ["watermelon", "peach", "apple", "tomato", "grape"];

// filter() goes through the list and keeps only those that pass a test.
// In this case, the test is "length < 6".
const shortFruits = fruits.filter(fruit => fruit.length < 6);

console.log("Short fruits (less than 6 letters):", shortFruits);
// Output: ['peach', 'apple', 'grape']



/**********************************************
 * Activity 5 - indexOf (find a number)
 **********************************************/

// Here’s a list of numbers
const numbers = [12, 34, 21, 54];

// The number we want to find
const luckyNumber = 21;

// indexOf() checks the array to see if that number exists.
// If it does, it returns the *position* (index).
// If not, it returns -1.
const index = numbers.indexOf(luckyNumber);

// If the index is not -1, we found it.
if (index !== -1) {
  console.log(`Lucky number ${luckyNumber} found at index ${index}`);
} else {
  console.log("No luck today.");
}

// Expected output: Lucky number 21 found at index 2
