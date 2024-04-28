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
  var pageNumInt = parseInt(pagenum);
  const pageCount = document.querySelector("#pageCount");
  const bookCount = document.querySelector("#bookCount");

  const addedBook = new Book(author, title, pagenum);
  
  myLibrary.push(addedBook);

  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const cardDiv = document.createElement('div');
  const sliderDiv = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const span = document.createElement('span');
  const deleteDiv = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const deleteIcon = document.createElement('img');

  cardDiv.classList.add('bookCards');
  label.classList.add('switch');
  input.setAttribute('type', 'checkbox');
  span.classList.add('slider');
  sliderDiv.classList.add('toggleContainer');
  deleteDiv.classList.add('deleteDiv');
  deleteIcon.src = 'images/delete.svg';
  // adding txt to all the created divs
  titleDiv.innerHTML = `Title: ${title}`;
  authorDiv.innerHTML = `Author: ${author}`;
  pageDiv.innerHTML = `Page Count: ${pagenum}`;
  pageCount.innerHTML = totalPages;

  deleteDiv.appendChild(deleteIcon);
  cardDiv.appendChild(deleteDiv);
  // adding the divs w added html to parent cardDiv
  cardDiv.appendChild(titleDiv);
  cardDiv.appendChild(authorDiv);
  cardDiv.appendChild(pageDiv);
  // creating and adding toggle switch and icon to cardDiv
  label.appendChild(input);
  label.appendChild(span);
  sliderDiv.appendChild(label);
  cardDiv.appendChild(sliderDiv);
  // adding the newly created card to page
  bookList.appendChild(cardDiv);

  const allcardDivs = document.querySelectorAll('.bookCards');

  // for every bookcard, if the toggle is switched change background color
  allcardDivs.forEach(cardDiv => {
    const checkbox = cardDiv.querySelector('.toggleContainer .switch input');
  // added custom property toggled to make sure doesn't loop through all cards
    if (!checkbox.toggled) {
      checkbox.toggled = true;
      checkbox.addEventListener('click', function() {
        if (this.checked) {
          cardDiv.style.backgroundColor = 'rgba(66, 245, 87, 0.5)';
          totalBooks += 1;
          if (isNaN(pageNumInt)) {
            pageNumInt = 0;
          }
          totalPages += pageNumInt;
          bookCount.innerHTML = totalBooks;
          pageCount.innerHTML = totalPages;
        } else if (!this.checked && totalBooks > 0) {
          totalBooks -= 1;
          totalPages -= pageNumInt;
          bookCount.innerHTML = totalBooks;
          pageCount.innerHTML = totalPages;
          cardDiv.style.backgroundColor = '';
        }
      });
    }
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