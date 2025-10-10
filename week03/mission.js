

//<body class="dark"> <!-- add dark temporarily for development -->
//  <header>
  //  <label for="theme">Theme:</label>
    //<select id="theme">
      //<option value="light">Light</option>
      //<option value="dark">Dark</option>
    //</select>
    //<img id="logo" src="images/byui-logo-blue.png" alt="BYUI logo">
  //</header>

 // <main>
 //   <h1>Our Mission</h1>
 //   <h2>Building a bright future together</h2>
 //   <p>… content …</p>
 // </main>

  //<script src="mission.js" defer></script>
// </body>

//I know, not the way to do this, but....

// =========================
// THEME SWITCHING SCRIPT
// =========================

// Grab the dropdown (the <select> element)
//const themeSelector = document.querySelector("#theme");

// Grab the <body> so we can add/remove the 'dark' class
//const body = document.body;

// Function runs whenever user changes theme
//function changeTheme() {
  // Check if the selected value is 'dark'
//  if (themeSelector.value === "dark") {
//    body.classList.add("dark"); // turn on dark mode
//  } else {
//    body.classList.remove("dark"); // go back to light mode
//  }
//  }

// Listen for changes on the dropdown
//themeSelector.addEventListener("change", changeTheme);  


//try this one....

// Grab elements
const themeSelector = document.querySelector("#theme");
const body = document.body;
const logo = document.querySelector("#logo"); // <img id="logo">

function changeTheme() {
  if (themeSelector.value === "dark") {
    body.classList.add("dark"); 
    logo.src = "mission-white.png"; // use white logo
  } else {
    body.classList.remove("dark"); 
    logo.src = "mission.png"; // use blue logo
  }
}

// Listen for theme changes
themeSelector.addEventListener("change", changeTheme);


