

// js/equipment.js

import { equipmentList } from "./modules/equipmentData.js";

const grid = document.querySelector("#equipmentGrid");
const filterButtons = document.querySelectorAll("#filters button");

// Function: Build equipment cards
function displayEquipment(items) {
    grid.innerHTML = ""; // clear

    items.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;

        grid.appendChild(card);
    });
}

// Modal elements
const modal = document.getElementById("equipment-modal");
const closeModal = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalName = document.getElementById("modal-name");
const modalType = document.getElementById("modal-type");
const modalDescription = document.getElementById("modal-description");

// Listen for clicks on the equipment grid
document.getElementById("equipmentGrid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;

    // Extract card info
    const imgSrc = card.querySelector("img").src;
    const name = card.querySelector("h3").textContent;
    const description = card.querySelector("p").textContent;

    // Find the type by matching the item from your data array
    //const item = equipmentData.find(i => i.name === name);  
    const item = equipmentList.find(i => i.name === name);


    // Fill modal
    modalImage.src = imgSrc;
    modalName.textContent = name;
    modalType.textContent = item ? item.type : "";
    modalDescription.textContent = description;
    // Build specs list dynamically
    const specsBox = document.getElementById("modal-specs");
    specsBox.innerHTML = ""; // clear old specs

if (item) {
    // Loop through extra properties
    for (const [key, value] of Object.entries(item)) {
        if (!["name", "type", "image", "description"].includes(key)) {
            specsBox.innerHTML += `<p><strong>${key}:</strong> ${value}</p>`;
        }
    }
}


    // Show modal
    modal.classList.remove("hidden");
});

// Close modal
closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Close when clicking outside modal-content
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});


// Initial display
displayEquipment(equipmentList);

// Filtering
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const type = button.dataset.type;

        if (type === "all") {
            displayEquipment(equipmentList);
        } else {
            const filtered = equipmentList.filter(eq => eq.type === type);
            displayEquipment(filtered);
        }
    });
});
