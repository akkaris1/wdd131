

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
  return tags.map(tag => `<li>${tag}</li>`).join("");
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
//    Includes View Recipe button that links
//    to recipe-details.html?recipe=<index>
// ===============================
function recipeTemplate(recipe) {
  // Find the index of this recipe in the ORIGINAL recipes array.
  // This gives us a stable id even when the list is filtered.
  let originalIndex = recipes.indexOf(recipe);

  // Fallback to 0 if something weird happens
  if (originalIndex === -1) originalIndex = 0;

  return `
    <article class="recipe-card">

      <img 
        src="images/${recipe.image}" 
        alt="${recipe.name}" 
        width="300" 
        height="200"
        loading="lazy"
      >

      <ul class="recipe__tags">
        ${tagsTemplate(recipe.tags)}
      </ul>

      <h2>${recipe.name}</h2>

      ${ratingTemplate(recipe.rating)}

      <p class="recipe__description">
        ${recipe.description}
      </p>

      <button class="view-btn" data-index="${originalIndex}">
        View Recipe
      </button>

    </article>
  `;
}


// ===============================
// 6. Render a List of Recipes
// ===============================
function renderRecipes(recipeList) {
  const recipeListElement = document.getElementById("recipeList");

  recipeListElement.innerHTML = recipeList
    .map(recipe => recipeTemplate(recipe))
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
// 9. View Recipe Button Handler
//    Click on a button in #recipeList,
//    read its data-index,
//    go to recipe-details.html?recipe=<index>
// ===============================
document.getElementById("recipeList").addEventListener("click", (event) => {
  const button = event.target.closest(".view-btn");
  if (!button) return;

  const index = button.dataset.index;
  if (index === undefined) return;

  // Build the URL with ?recipe=<index>
  window.location.href = `recipe-details.html?recipe=${index}`;
});


// ===============================
// 10. INIT — Run on Page Load
// ===============================
// Show one random recipe on load (as in the assignment)
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]); // Pass as array
}

init();
