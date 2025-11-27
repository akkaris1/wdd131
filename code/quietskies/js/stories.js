

// js/stories.js

const reflections = [
    "The quiet sky is a reminder that the universe is always there, waiting.",
    "Even on clear nights, the calm is sometimes louder than the stars.",
    "Light travels for millions of years just to meet your eyes tonight.",
    "The sky does not rush — and we don’t need to either."
];

const textBox = document.querySelector("#reflectionText");
const button = document.querySelector("#newReflection");

function newReflection() {
    const random = Math.floor(Math.random() * reflections.length);
    textBox.textContent = reflections[random];
}

button.addEventListener("click", newReflection);

// Default
textBox.textContent = "Click for a new reflection…";
