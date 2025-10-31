
// form-demo.js

// When user changes payment method, show correct inputs
function togglePaymentDetails(e) {
  // We can find the form from the select element
  const theForm = e.target.form;

  // Containers to show/hide
  const creditCardContainer = document.getElementById("creditCardContainer");
  const paypalContainer = document.getElementById("paypalContainer");

  // Inputs inside those containers
  const creditCardInput = document.getElementById("creditCard");
  const paypalInput = document.getElementById("paypalUsername");

  // First, hide both sections & remove required fields
  creditCardContainer.classList.add("hide");
  paypalContainer.classList.add("hide");
  creditCardInput.required = false;
  paypalInput.required = false;

  // Now show the correct one based on user selection
  if (theForm.paymentMethod.value === "creditCard") {
    creditCardContainer.classList.remove("hide");
    creditCardInput.required = true;
  } else if (theForm.paymentMethod.value === "paypal") {
    paypalContainer.classList.remove("hide");
    paypalInput.required = true;
  }
}

// Validate form on submit (Activity 3 stretch)
function validateForm(event) {
  const theForm = event.target;
  const errors = [];
  let isValid = true;

  // Only allow submission if name = Bob
  if (theForm.customerName.value !== "Bob") {
    isValid = false;
    errors.push("Only people named Bob may submit this form. (Class silliness test)");
  }

  // Only allow credit card 1234123412341234 as valid
  if (theForm.paymentMethod.value === "creditCard") {
    if (theForm.creditCard.value !== "1234123412341234") {
      isValid = false;
      errors.push("Invalid credit card. Try: 1234123412341234");
    }
  }

  if (!isValid) {
    event.preventDefault(); // stop page navigation
    showErrors(errors);
    return false;
  }
}

// Display error messages to the user
function showErrors(errors) {
  const errorEl = document.querySelector(".errors");
  const html = errors.map((err) => `<p>${err}</p>`);
  errorEl.innerHTML = html.join("");
}

// Attach our event listeners
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
