const book1 = new Book('Book 2', 'Author 2', 210, true)
const book2 = new Book('Book 3', 'Author 3', 220, false)

let displayArea = document.querySelector('.book-container');

function createCard(book) {
    const card = document.createElement('div');
    card.classList.add('book-card');  
    
    const title = document.createElement('p');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const isRead = document.createElement('p');
    isRead.textContent = `Read: ${book.isRead ? 'Yes' : 'No'}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);

    
    displayArea.appendChild(card);
}

let myLibrary = [book1, book2];

myLibrary.forEach(createCard)

function Book(title, author, pages, isRead) {
  this.title = title;
  this.pages = pages;
  this.author = author;
  this.isRead = isRead;
}

function addBookToLibrary() {
  // do stuff here
}