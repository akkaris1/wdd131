
// rewrite the js file to comply with 100 character rule 

/* ============================================
   blog.js — Data for Book Review Blog
   Author: Karis Barfield
   Description:
   Provides a list (array) of book review articles
   to be displayed on the Book Review Blog.
   ============================================ */

// Create an array named "articles" that holds
// multiple objects. Each object represents one book.
const articles = [
  {
    // Each book gets a unique ID number
    id: 1,

    // The book's title
    title: "Septimus Heap Book One: Magyk",

    // The date this article was posted
    date: "July 5, 2022",

    // A short summary of the book
    description:
      "If you enjoy stories about seventh sons of seventh "
      + "sons and magyk, this is the book for you.",

    // The URL of the book's cover image
    imgSrc:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",

    // Alternate text for screen readers
    imgAlt: "Book cover for Septimus Heap 1",

    // Recommended age range for readers
    ages: "10-14",

    // Genre category
    genre: "Fantasy",

    // Star rating (simple string display)
    stars: "★★★★"
  },

  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",

    // Description split for readability
    description:
      "The anticipated new novel by Rick Riordan. "
      + "After Greek mythology (Percy Jackson), "
      + "Greek/Roman (Heroes of Olympus), and Egyptian "
      + "(Kane Chronicles), Rick decides to try his hand "
      + "with Norse Mythology, and the end result is good.",

    imgSrc:
      "https://books.google.com/books/content/images/frontcover/"
      + "xWuyBAAAQBAJ?fife=w300",

    imgAlt: "Book cover for Magnus Chase 1",
    ages: "12-16",
    genre: "Fantasy",
    stars: "★★★★"
  }
];

// This export allows other scripts (like blog page logic)
// to import and use this data if needed.
export { articles };

// Temporarilly added to test....
// console.log("blog.js loaded successfully!");

