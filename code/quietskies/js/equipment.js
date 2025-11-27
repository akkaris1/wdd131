

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
