
// This function runs when the button is clicked
function updateName() {
  // Get the value from the input box
  const name = document.getElementById('nameInput').value;

  // Find the footer paragraph and update its text
  document.getElementById('footer-name').textContent = name || "Your name here";
}
