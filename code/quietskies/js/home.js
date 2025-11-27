

// js/home.js

// Select the message element
const skyMessage = document.querySelector("#skyMessage");

// Function to generate message
function getSkyMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message = "";

    if (hour < 6) {
        message = "The sky is quiet — the deep hours before dawn.";
    } else if (hour < 12) {
        message = "Morning light is soft… the Sun is climbing.";
    } else if (hour < 18) {
        message = "The afternoon sky rests, preparing for the night.";
    } else if (hour < 22) {
        message = "Evening calm — a beautiful time to observe.";
    } else {
        message = "The quiet hours are here… the sky is yours.";
    }

    skyMessage.textContent = message;
}

// Initialize on page load
getSkyMessage();
