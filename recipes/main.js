

// ===============================
// Import recipe data
// ===============================
import recipes from "./recipes.mjs";


// ===============================
// 1. Random Number Function
// ===============================
function random(num) {
  return Math.floor(Math.random() * num);
}


// ===============================
// 2. Get Random Item From List
// ===============================
function getRandomListEntry(list) {
  return list[random(list.length)];
}


// ===============================
// 3. Template: Build Tags HTML
// ===============================
function tagsTemplate(tags) {
  let html = "";
  tags.forEach(tag => {
    html += `<li>${tag}</li>`;
  });
  return html;
}


// ===============================
// 4. Template: Build Star Ratings
// ===============================
function ratingTemplate(rating) {
  let html = `
    <span
      class="rating"
      role="img"
      aria-label="Rating: ${rating} out of 5 stars"
    >
  `;

  // ALWAYS 5 stars total
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}


// ===============================
// 5. Template: Build Full Recipe Card
//    *** UPDATED to include View Recipe button ***
// ===============================
function recipeTemplate(recipe, index) {
  return `
    <article class="recipe-card">

      <!-- Recipe Image -->
      <img 
        src="images/${recipe.image}" 
        alt="${recipe.name}" 
        width="300" 
        height="200"
        loading="lazy"
      >

      <!-- Recipe Tags -->
      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>

      <!-- Name -->
      <h2>${recipe.name}</h2>

      <!-- Star Rating -->
      ${ratingTemplate(recipe.rating)}

      <!-- Short Description -->
      <p class="recipe__description">
        ${recipe.description}
      </p>

      <!-- NEW BUTTON: takes user to the full recipe -->
      <button class="view-btn" data-index="${index}">
        View Recipe
      </button>

    </article>
  `;
}


// ===============================
// 6. Render a List of Recipes
//    *** UPDATED to pass index to template ***
// ===============================
function renderRecipes(recipeList) {
  const recipeListElement = document.getElementById("recipeList");

  recipeListElement.innerHTML = recipeList
    .map((recipe, index) => recipeTemplate(recipe, index))
    .join("");
}


// ===============================
// 7. Filtering Function (Search)
// ===============================
function filterRecipes(query) {
  query = query.toLowerCase();

  const filtered = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
      recipe.recipeIngredient.find(ing => ing.toLowerCase().includes(query))
    );
  });

  // Sort alphabetically by recipe name
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  return filtered;
}


// ===============================
// 8. Search Handler
// ===============================
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const query = document.getElementById("search").value.trim().toLowerCase();

  // Show all if empty
  if (query === "") {
    renderRecipes(recipes);
    return;
  }

  const results = filterRecipes(query);
  renderRecipes(results);
});


// ===============================
// 9. NEW: View Recipe Button Handler
//    Detect WHEN a button is clicked,
//    Read the recipe index,
//    Jump to the detail page.
// ===============================
document.getElementById("recipeList").addEventListener("click", (e) => {
  if (e.target.classList.contains("view-btn")) {
    const index = e.target.dataset.index;

    // Send user to the details page with ?recipe=# in the URL
    window.location.href = `recipe-details.html?recipe=${index}`;
  }
});


// ===============================
// 10. INIT — Run on Page Load
// ===============================
// Option A (assigned version): show a random recipe
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

// Option B (real-world version): show ALL recipes
// function init() {
//   renderRecipes(recipes);
// }

init();
