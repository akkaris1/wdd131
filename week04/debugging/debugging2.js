

const PI = 3.14;
let area = 0;

// Define a function that calculates area of a circle
function circleArea(radius) {
  const area = radius * radius * PI; // radius squared times PI
  return area;                       // send it back to whoever called it
}

// Call the function with radius 3
area = circleArea(3);
console.log("Area for radius 3:", area);

// Try another example
area = circleArea(4);
console.log("Area for radius 4:", area);
