// const book1 = new Book('Book 2', 'Author 2', 210, true);
let myLibrary = [];

let displayArea = document.querySelector('.book-container');

function stringToBoolean(str) {
  return str === 'yes' ? true : false;
}

function createCard(book) {
  const card = document.createElement('div');
  card.classList.add('book-card');

  const title = document.createElement('p');
  title.textContent = `Title: ${book.title}`;

  const author = document.createElement('p');
  author.textContent = `Author: ${book.author}`;

  const pages = document.createElement('p');
  pages.textContent = `Pages: ${book.pages}`;

  const isRead = document.createElement('button');
  isRead.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;

  isRead.addEventListener('click', function (e) {
    const buttonText = e.target.innerText;

    if (buttonText === 'Read: Yes') {
      e.target.innerText = 'Read: No';
    } else {
      e.target.innerText = 'Read: Yes';
    }
  });

  const removeButton = document.createElement('button');
  removeButton.textContent = 'Remove this book';

  removeButton.addEventListener('click', function () {
    // Remove card from the DOM
    displayArea.removeChild(card);

    const index = myLibrary.indexOf(book);

    myLibrary.splice(index, 1);
  });
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(isRead);

  br = document.createElement('span');
  br.innerHTML = '<br/>';
  card.appendChild(br);

  card.appendChild(removeButton);

  displayArea.appendChild(card);
}

function Book(title, author, pages, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

var popup = document.querySelector('.popup');
var addBookButton = document.querySelector('.add-book-btn');

addBookButton.addEventListener('click', () => (popup.style.display = 'block'));

document.querySelector('form').addEventListener('submit', function (e) {
  // Prevent form from submitting and reloading the page
  e.preventDefault();

  // Get data from form fields
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var pages = document.getElementById('pages').value;
  var read = document.getElementById('read').value;

  popup.style.display = 'none';
  document.querySelector('form').reset();

  const book = new Book(title, author, pages, stringToBoolean(read));
  addBookToLibrary(book);

  while (displayArea.firstChild) {
    displayArea.removeChild(displayArea.firstChild);
  }

  myLibrary.forEach(createCard);
});
