


/* ---------------------------
   MENU TOGGLE + RESIZE HANDLER
---------------------------- */

// Select the menu button and navigation element
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

// Toggle "open" class on nav when menu button is clicked
menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Function to handle window resizing
function handleResize() {
  if (window.innerWidth > 1000) {
    // On large screens, always show nav
    nav.classList.remove('open');
    nav.style.display = 'block';
  } else {
    // On small screens, hide unless toggled open
    nav.style.display = nav.classList.contains('open') ? 'block' : 'none';
  }
}

// Watch for window resize and call function
window.addEventListener('resize', handleResize);

// Run once on page load
handleResize();

/* ---------------------------
   IMAGE VIEWER MODAL
---------------------------- */

// Select the gallery section
const gallery = document.querySelector('.gallery');

// Create a <dialog> dynamically
const modal = document.createElement('dialog');
document.body.appendChild(modal);

// Handle image clicks
gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return; // Do nothing if clicked outside image

  // Get small image source and alt text
  const src = clickedImage.getAttribute('src');
  const alt = clickedImage.getAttribute('alt');

  // Replace "-sm" with "-full" for large image
  const largeSrc = src.replace('-sm', '-full');

  // Inject HTML into dialog (modal)
  modal.innerHTML = `
    <img src="${largeSrc}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;

  modal.showModal(); // Show the dialog modal
});

// Close when clicking the "X" button
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('close-viewer')) {
    modal.close();
  }
});

// Close modal when clicking outside image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});
