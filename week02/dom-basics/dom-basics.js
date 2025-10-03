// dom-basics.js

// Step 1: Add a paragraph
const newParagraph = document.createElement("p"); // make a <p>
newParagraph.innerText = "Added with Javascript!"; // add text
document.body.appendChild(newParagraph); // stick it in the body

// Step 2: Add an image
const newImage = document.createElement("img"); // make <img>
newImage.setAttribute("src", "https://picsum.photos/200"); // add src
newImage.setAttribute("alt", "Random image from Picsum"); // add alt text
document.body.appendChild(newImage); // add to the page

// Step 3: Add a div with a list
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

// Step 4: Add a section with h2 and paragraph
const newSection = document.createElement("section");

// create h2
const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";
newSection.appendChild(newHeading);

// create paragraph
const sectionPara = document.createElement("p");
sectionPara.innerText = "This was added through Javascript";
newSection.appendChild(sectionPara);

// append section to body
document.body.appendChild(newSection);
