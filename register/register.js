
let participantCount = 1;

// When Add Participant is clicked
document.getElementById("add").addEventListener("click", function () {
  participantCount++;

  // Template for new participant
  const template = participantTemplate(participantCount);

  // Insert the new participant *before* the Add button
  document.getElementById("add").insertAdjacentHTML("beforebegin", template);
});

// Create a new participant section
// This is a string literal
function participantTemplate(count) {
  return `
  <section class="participant${count}">
    <p>Participant ${count}</p>
    <div class="item">
      <label for="fname${count}"> First Name<span>*</span></label>
      <input id="fname${count}" type="text" name="fname${count}" required />
    </div>
    <div class="item activities">
      <label for="activity${count}">Activity #<span>*</span></label>
      <input id="activity${count}" type="text" name="activity${count}" />
    </div>
    <div class="item">
      <label for="fee${count}">Fee ($)<span>*</span></label>
      <input id="fee${count}" type="number" name="fee${count}" />
    </div>
    <div class="item">
      <label for="date${count}">Desired Date<span>*</span></label>
      <input id="date${count}" type="date" name="date${count}" />
    </div>
    <div class="item">
    
      <p>Grade</p>
      <select>
        <option selected value="" disabled></option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
      </select>
    </div>
  </section>
  `;
}

// Handle Form Submission
document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault(); // Stop page from reload

  const total = totalFees();
  const adultName = document.getElementById("adult_name").value;

  const summaryMessage = successTemplate({
    name: adultName,
    participants: participantCount,
    total: total
  });

  // Hide form
  document.querySelector("form").style.display = "none";

  // Show summary
  document.getElementById("summary").innerHTML = summaryMessage;
}

function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]; // Convert NodeList → Array

  let total = 0;
  feeElements.forEach(fee => {
    if (fee.value !== "") {
      total += parseFloat(fee.value);
    }
  });
  return total;
}

function successTemplate(info) {
  return `
    <h2>Thank you, ${info.name}!</h2>
    <p>You have registered <strong>${info.participants}</strong> participant(s).</p>
    <p>Total fees owed: <strong>$${info.total}</strong>.</p>
  `;
}
