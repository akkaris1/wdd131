


/* ---------------------------
   IMAGE VIEWER MODAL
---------------------------- */

// Select the gallery section
const gallery = document.querySelector('.gallery');

// Create a <dialog> element dynamically
const modal = document.createElement('dialog');
document.body.appendChild(modal);

// Function to open image in modal
gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return; // if clicked outside image, do nothing

  // Get image source and alt text
  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');

  // Replace '-sm' with '-full' to get large version
  const largeSrc = src.split('-')[0] + '-full.jpeg';

  // Insert HTML into dialog
  modal.innerHTML = `
    <img src="${largeSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal(); // Show the modal
});

// Function to close when clicking the "X" button
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-viewer')) {
    modal.close();
  }
});

// Function to close when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
