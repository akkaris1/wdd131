

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
// ===============================
function recipeTemplate(recipe) {
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
// 9. INIT — Run on Page Load
// ===============================
function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]); // Pass as array
}

init();
