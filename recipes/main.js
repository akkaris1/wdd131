


import recipeData from './recipes.mjs';

function renderRecipes(recipes) {
  const recipeList = document.getElementById("recipeList");
  recipeList.innerHTML = ""; // clear first

  recipes.forEach(recipe => {
    recipeList.innerHTML += `
      <article class="recipe-card">
       
        <img src="images/${recipe.image}" alt="${recipe.name}" width="300" height="200" loading="lazy">

        <h2>${recipe.name}</h2>
        <span
          class="rating"
          role="img"
          aria-label="Rating: ${recipe.rating} out of 5 stars"
        >
          ${"⭐".repeat(recipe.rating)}${"☆".repeat(5 - recipe.rating)}
        </span>
      </article>
    `;
  });
}

renderRecipes(recipeData);

// Search handler
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const query = document.getElementById("search").value.toLowerCase();
  const filtered = recipeData.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );

  renderRecipes(filtered);
});
// Search handler
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const query = document.getElementById("search").value.toLowerCase().trim();

  // If search is empty, show all recipes
  if (query === "") {
    renderRecipes(recipeData);
    return;
  }

  const filtered = recipeData.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );

  renderRecipes(filtered);
});


