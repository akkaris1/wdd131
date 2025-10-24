
/* ============================================
   blog.js — Book Review Blog
   Author: Karis Barfield
   Description: Stores book data and dynamically
   builds article elements for the blog page.
   ============================================ */

// ----- BOOK DATA -----

const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description:
      "If you enjoy stories about seventh sons of seventh sons "
      + "and magyk, this is the book for you.",
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Book cover for Septimus Heap 1",
    ages: "10-14",
    genre: "Fantasy",
    stars: "★★★★"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description:
      "The anticipated new novel by Rick Riordan. After Greek mythology "
      + "(Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian "
      + "(Kane Chronicles), Rick tries Norse Mythology, and the result "
      + "is good.",
    imgSrc:
      "https://books.google.com/books/content/images/frontcover/"
      + "xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "★★★★"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description:
      "A fierce dispute among the Gods and the theft of a powerful Orb "
      + "divide the World into kingdoms. Young Garion, with his 'Aunt Pol' "
      + "and an elderly man called Wolf, set out on a complex mission.",
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Book cover for Pawn of Prophecy",
    ages: "12-16",
    genre: "Fantasy",
    stars: "★★★★★"
  }
];

// ----- BUILD AND DISPLAY ARTICLES -----
function displayArticles() {
  // Get reference to container where articles go
  const container = document.querySelector(".articles");

  // Clear any existing HTML (like old hard-coded posts)
  container.innerHTML = "";

  // Loop through each article in the array
  articles.forEach(item => {
    const article = document.createElement("article");
    article.classList.add("book-article");

    // Use template literals to create the inner structure
    article.innerHTML = `
      <div class="book-details">
        <p><strong>Date:</strong> ${item.date}</p>
        <p><strong>Age Range:</strong> ${item.ages}</p>
        <p><strong>Genre:</strong> ${item.genre}</p>
        <p><strong>Rating:</strong> ${item.stars}</p>
      </div>
      <div class="book-content">
        <h2>${item.title}</h2>
        <img src="${item.imgSrc}" alt="${item.imgAlt}">
        <p>${item.description}</p>
      </div>
    `;

    // Add to page
    container.appendChild(article);
  });
}

// Run the function when the script loads
displayArticles();
