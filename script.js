const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("#closebtn");
const addBook = document.querySelector("#addbook");
const bookList = document.querySelector("#booklist");

const myLibrary = [];

function Book(title, author) {
  this.title = title;
  this.author = author;
}

function addBookToLibrary() {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  
  const addedBook = new Book(author, title);
  
  myLibrary.push(addedBook);

  myLibrary.forEach(book => {
    const newDiv = document.createElement('div');
  
    newDiv.innerHTML = `Title: ${book.title}, Author: ${book.author}`;
    bookList.appendChild(newDiv);
  });
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