

// events.js

// This array will hold our task objects.
let tasks = [];

/**
 * Renders the current list of tasks to the <ul> in the HTML.
 */
function renderTasks(tasks) {
  // Get the UL element
  const listElement = document.querySelector("#todoList");

  // Clear out the current list before re-rendering
  listElement.innerHTML = "";

  // Loop through tasks and build an HTML string for each
  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.completed) {
      li.classList.add("strike"); // Add the "strike" class for completed tasks
    }

    // Create the task text
    const p = document.createElement("p");
    p.textContent = task.detail;

    // Create the action icons container
    const div = document.createElement("div");

    // Delete icon
    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "❎";
    deleteIcon.dataset.action = "delete"; // custom data attribute

    // Complete icon
    const completeIcon = document.createElement("span");
    completeIcon.textContent = "✅";
    completeIcon.dataset.action = "complete";

    // Add icons to the div
    div.appendChild(deleteIcon);
    div.appendChild(completeIcon);

    // Add everything to the list item
    li.appendChild(p);
    li.appendChild(div);

    // Add the list item to the list
    listElement.appendChild(li);
  });
}

/**
 * Adds a new task based on user input.
 */
function newTask() {
  const input = document.querySelector("#todo");
  const taskDetail = input.value.trim(); // remove extra spaces

  // Only add if something was typed
  if (taskDetail) {
    // Create a new task object
    const task = {
      detail: taskDetail,
      completed: false,
    };

    // Add to the array
    tasks.push(task);

    // Re-render the updated list
    renderTasks(tasks);

    // Clear the input for next entry
    input.value = "";
  }
}

/**
 * Removes a task from the DOM and array.
 */
function removeTask(taskElement) {
  // Filter out the removed task from the array
  tasks = tasks.filter(
    (task) => task.detail !== taskElement.querySelector("p").innerText
  );

  // Remove it from the DOM
  taskElement.remove();
}

/**
 * Toggles a task’s "completed" status.
 */
function completeTask(taskElement) {
  const taskIndex = tasks.findIndex(
    (task) => task.detail === taskElement.querySelector("p").innerText
  );

  // Toggle completed true/false
  tasks[taskIndex].completed = !tasks[taskIndex].completed;

  // Toggle the CSS strike-through effect
  taskElement.classList.toggle("strike");

  console.log(tasks); // for debugging
}

/**
 * Handles clicks on the task list using event delegation.
 */
function manageTasks(event) {
  // Only act if a span (icon) was clicked
  if (event.target.tagName === "SPAN") {
    // Find the parent <li> for this clicked icon
    const taskElement = event.target.closest("li");

    // Check the data-action type
    const action = event.target.dataset.action;

    if (action === "delete") {
      removeTask(taskElement);
    } else if (action === "complete") {
      completeTask(taskElement);
    }
  }
}

// ====================
// EVENT LISTENERS
// ====================

// Add listener for the Enter button
document.querySelector("#submitTask").addEventListener("click", newTask);

// Add listener to the UL (for event delegation)
document.querySelector("#todoList").addEventListener("click", manageTasks);
