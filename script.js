const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#addbtn");
const closeButton = document.querySelector("#closebtn");
const addBook = document.querySelector("#addbook");
const bookList = document.querySelector("#booklist");
let totalPages = 0;
let totalBooks = 0;

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function editBookLibrary() {
  const author = document.querySelector("#author").value;
  const title = document.querySelector("#title").value;
  const pagenum = document.querySelector("#pagenum").value;
  let pageNumInt = parseInt(pagenum);
  const pageCount = document.querySelector("#pageCount");
  const bookCount = document.querySelector("#bookCount");

  const addedBook = new Book(author, title, pagenum);
  
  myLibrary.push(addedBook);

  const titleDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const pageDiv = document.createElement('div');
  const cardDiv = document.createElement('div');
  const sliderDiv = document.createElement('div');
  const starsDiv = document.createElement('div');
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
  starsDiv.classList.add('stars');
  deleteIcon.src = 'images/delete.svg';
  // adding txt to all the created divs
  titleDiv.innerHTML = `Title: ${title}`;
  authorDiv.innerHTML = `Author: ${author}`;
  pageDiv.innerHTML = `Page Count: ${pagenum}`;
  pageCount.innerHTML = totalPages;

  for (let i = 0; i < 6; i++) {
    const starBtn = document.createElement('i');
    starBtn.classList.add('fa-solid', 'fa-star');

    starsDiv.appendChild(starBtn);
  }

  cardDiv.appendChild(starsDiv);
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

  allcardDivs.forEach(cardDiv => {
    const checkbox = cardDiv.querySelector('.toggleContainer .switch input');
    const deleteSelector = cardDiv.querySelector('.deleteDiv');
      //removing book from library array and UI using splice
      deleteSelector.addEventListener('click', () => {
        cardDiv.remove();
        myLibrary.splice(myLibrary.indexOf(cardDiv.title), 1);
      });

      const stars = cardDiv.querySelectorAll(".stars i");
      // Loop through the "stars" NodeList
      stars.forEach((star, index1) => {
        // Add an event listener that runs a function when the "click" event is triggered
        star.addEventListener("click", () => {
          // Loop through the "stars" NodeList Again
          stars.forEach((star, index2) => {
            // Add the "active" class to the clicked star and any stars with a lower index
            // and remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
          });
        });
      });
        
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
  })
}
console.log(myLibrary);

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

addBook.addEventListener("click", () => {
  editBookLibrary();
});