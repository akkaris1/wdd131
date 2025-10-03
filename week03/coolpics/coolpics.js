


/* ---------------------------
   JAVASCRIPT FILE
   Right now this just toggles
   the navigation menu open/closed
   on small screens.
---------------------------- */

// Select the menu button
const menuButton = document.getElementById('menu');

// Select the navigation element
const nav = document.querySelector('nav');

// Add event listener for clicks
menuButton.addEventListener('click', function() {
  // Toggle a CSS class "open" on the nav
  nav.classList.toggle('open');
});

/* ---------------------------
   OPTIONAL CSS I would like to add
   to handle the "open" class:
   (maybe add this to coolpics.css)

nav {
  display: none;   // hide nav by default
}

nav.open {
  display: block;  // show nav when "open"
}
---------------------------- */
