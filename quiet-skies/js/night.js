


// js/night.js

const stories = [
    {
        animal: "Moose",
        text: "A young bull walked between me and the telescope, pausing to watch me watching him."
    },
    {
        animal: "Bear",
        text: "A bear scratched the outhouse once while I was inside — we scared each other equally."
    },
    {
        animal: "Lynx",
        text: "A lynx moved silently across the snow near the telescope shed, barely leaving tracks."
    },
    {
        animal: "Freeman",
        text: "Freeman tried to steal the taco container from the takeout bag — and almost succeeded."
    }
];

// DOM elements
const storyBox = document.querySelector("#wildlifeStory");
const storyButton = document.querySelector("#newStory");

// Function to show a random story
function showStory() {
    const randomIndex = Math.floor(Math.random() * stories.length);
    const chosen = stories[randomIndex];
    storyBox.textContent = chosen.text;
}

// Event listener
storyButton.addEventListener("click", showStory);

// Default message
storyBox.textContent = "Click the button for a story…";
