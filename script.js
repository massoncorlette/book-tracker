const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addbtn");
const closeButton = document.querySelector("#closebtn");
const addBook = document.querySelector("#addbook");
const bookList = document.querySelector("#booklist");
let totalPages = 0;
let totalBooks = 0;

const myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pagenum = document.querySelector("#pagenum").value;
  const pageCount = document.querySelector("#pageCount");
  const bookCount = document.querySelector("#bookCount");

  const addedBook = new Book(author, title, pagenum);
  
  myLibrary.push(addedBook);
  const pageNumInt = parseInt(pagenum);
  totalPages += pageNumInt;
  totalBooks += 1;

  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const cardDiv = document.createElement('div');

  cardDiv.classList.add('bookCards');

  titleDiv.innerHTML = `Title: ${title}`;
  authorDiv.innerHTML = `Author: ${author}`;
  pageDiv.innerHTML = `Page Count: ${pagenum}`;
  pageCount.innerHTML = totalPages;
  bookCount.innerHTML = totalBooks;

  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.appendChild(pageDiv);
  
  bookList.appendChild(cardDiv);
}


showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBook.addEventListener("click", () => {
  addBookToLibrary();
});