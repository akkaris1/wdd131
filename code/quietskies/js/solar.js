

// js/solar.js

const solarStatus = document.querySelector("#solarStatus");
const indicatorBox = document.querySelector("#solarIndicator");

// Simple list of conditions
const solarConditions = [
    { status: "Quiet Sun", color: "#3dd5e5" },
    { status: "Active Region Visible", color: "#8fbf6f" },
    { status: "CME Possible", color: "#e6a23c" }
];

function updateSolarActivity() {
    const random = Math.floor(Math.random() * solarConditions.length);
    const condition = solarConditions[random];

    solarStatus.textContent = condition.status;
    indicatorBox.style.borderColor = condition.color;
}

// Run once at load
updateSolarActivity();
