// import { addTodo, generateId, generateBookObject } from "./utils.js";

const books = [];
const RENDER_EVENT = "render-book";
const SAVED_EVENT = "saved-book";
const STORAGE_KEY = "LIBRARY_APPS";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("myModal");
  const modalBtn = document.getElementById("modalBtn");
  const modalExit = document.getElementsByClassName("close")[0];
  modalBtn.addEventListener("click", function () {
    modal.style.display = "block";
  });
  modalExit.addEventListener("click", function () {
    modal.style.display = "none";
  });
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
    modal.style.display = "none";
  });

  const searchInput = document.querySelector(".search input");
  const searchButton = document.querySelector(".search button");
  searchButton.addEventListener("click", function () {
    searchBooks(searchInput.value);
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

document.addEventListener(RENDER_EVENT, function () {
  console.log(books);
  const unfinishedBookList = document.getElementById("unfinished-book");
  unfinishedBookList.innerHTML = "";

  const finishedBookList = document.getElementById("finished-book");
  finishedBookList.innerHTML = "";

  for (const book of books) {
    const bookElement = insertBook(book);
    if (!book.isComplete) {
      unfinishedBookList.append(bookElement);
    } else finishedBookList.append(bookElement);
  }

  profileInfo();
});

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist() /* boolean */ {
  if (typeof Storage === undefined) {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

document.addEventListener(SAVED_EVENT, function () {
  // alert("Kamu telah berhasil mengubah data!");
});

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      books.push(book);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

function searchBooks(query) {
  const unfinishedBookList = document.getElementById("unfinished-book");
  unfinishedBookList.innerHTML = "";

  const finishedBookList = document.getElementById("finished-book");
  finishedBookList.innerHTML = "";

  const lowerCaseQuery = query.toLowerCase();

  for (const book of books) {
    if (book.title.toLowerCase().includes(lowerCaseQuery) || book.author.toLowerCase().includes(lowerCaseQuery)) {
      const bookElement = insertBook(book);
      if (!book.isComplete) {
        unfinishedBookList.append(bookElement);
      } else finishedBookList.append(bookElement);
    }
  }
}

function profileInfo() {
  const allBook = document.getElementById("info-all");
  const finishedBook = document.getElementById("info-finished");
  const readingBook = document.getElementById("info-reading");

  allBook.innerText = `You have ${books.length} books`;

  const finishedBooks = books.filter((book) => book.isComplete);
  const finishedBooksLength = finishedBooks.length;
  finishedBook.innerText = `${finishedBooksLength} finished book(s)!`;

  const readingBooks = books.filter((book) => book.isComplete === false);
  const readingBooksLength = readingBooks.length;
  readingBook.innerText = `${readingBooksLength} reading progress book(s)!`;
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = parseInt(document.getElementById("year").value);
  const synopsis = document.getElementById("synopsis").value;

  const generatedID = generateId();
  const bookObject = generateBookObject(generatedID, title, author, year, synopsis, false);
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, author, year, synopsis, isComplete) {
  return {
    id,
    title,
    author,
    year,
    synopsis,
    isComplete,
  };
}

function displaySynopsis({ author, title, synopsis }) {
  const asideElement = document.querySelector("aside");
  asideElement.innerHTML = `
  <div class="aside-cover">
    <img src="/assets/images/book-cover.jpeg" alt="" />
  </div>
  <div class="aside-header">
    <p>${author}</p>
    <h2>${title}</h2>
  </div>
  <div class="aside-desc">
    <p>
     ${synopsis}
    </p>
  </div>
  `;
}

function clearSynopsis() {
  const asideElement = document.querySelector("aside");
  asideElement.innerHTML = "";
}

function insertBook(bookObject) {
  const bookTitle = document.createElement("h2");
  bookTitle.innerText = bookObject.title;

  const bookAuthor = document.createElement("p");
  bookAuthor.innerText = bookObject.author;

  const bookYear = document.createElement("p");
  bookYear.innerText = bookObject.year;

  const bookCardHeader = document.createElement("div");
  bookCardHeader.classList.add("book-card-header");
  bookCardHeader.append(bookAuthor, bookTitle, bookYear);

  const bookButtonContainer = document.createElement("div");
  bookButtonContainer.classList.add("book-button");

  const bookDesc = document.createElement("div");
  bookDesc.classList.add("book-desc");
  bookDesc.append(bookCardHeader, bookButtonContainer);

  const bookCover = document.createElement("img");
  bookCover.setAttribute("src", "/assets/images/book-cover.jpeg");

  const bookCard = document.createElement("div");
  bookCard.setAttribute("id", `book-${bookObject.id}`);
  bookCard.classList.add("book-card");
  bookCard.append(bookCover, bookDesc);

  if (bookObject.isComplete) {
    const readButton = document.createElement("button");
    readButton.innerText = "Read";
    readButton.setAttribute("id", "read");

    readButton.addEventListener("click", function () {
      readBookAgain(bookObject.id);
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("id", "remove");

    removeButton.addEventListener("click", function () {
      removeBookFromCompleted(bookObject.id);
    });

    bookButtonContainer.append(readButton, removeButton);
  } else {
    const synopsisButton = document.createElement("button");
    synopsisButton.innerText = "Synopsis";
    synopsisButton.addEventListener("click", function () {
      displaySynopsis({
        author: bookObject.author,
        title: bookObject.title,
        synopsis: bookObject.synopsis,
      });
    });

    const finishButton = document.createElement("button");
    finishButton.innerText = "Finish";
    finishButton.setAttribute("id", "finish");

    finishButton.addEventListener("click", function () {
      addBookToCompleted(bookObject.id);
    });

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.setAttribute("id", "remove");

    removeButton.addEventListener("click", function () {
      removeBookFromUnfinished(bookObject.id);
    });

    bookButtonContainer.append(synopsisButton, finishButton, removeButton);
  }

  return bookCard;
}

function addBookToCompleted(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeBookFromCompleted(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  const bookTitle = books[bookTarget].title;
  const asideElement = document.querySelector("aside");
  const asideTitle = asideElement.querySelector("h2")?.innerText;

  if (bookTitle === asideTitle) {
    clearSynopsis();
  }

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function removeBookFromUnfinished(bookId) {
  const bookTarget = findBookIndex(bookId);

  if (bookTarget === -1) return;

  const bookTitle = books[bookTarget].title;
  const asideElement = document.querySelector("aside");
  const asideTitle = asideElement.querySelector("h2")?.innerText;

  if (bookTitle === asideTitle) {
    clearSynopsis();
  }

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function readBookAgain(bookId) {
  const bookTarget = findBook(bookId);

  if (bookTarget == null) return;

  bookTarget.isComplete = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findBook(bookId) {
  for (const book of books) {
    if (book.id === bookId) {
      return book;
    }
  }
  return null;
}

function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id === bookId) {
      return index;
    }
  }

  return -1;
}
