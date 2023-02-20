import { Book } from './book.js';
/* eslint-disable */
export class BookCollection {
  /* eslint-enable */
  constructor() {
    this.books = [];
  }

  addBook = (title, author) => {
    const newBook = new Book(title, author);
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

  removeBook = (index) => {
    /* eslint-disable */
    this.books = this.books.filter((book, ind) => ind != index);
    /* eslint-enable */
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }

displayBooks = () => {
  const bookListContainer = document.querySelector('.books-col');
  bookListContainer.innerHTML = '';
  for (let k = 0; k < this.books.length; k += 1) {
    const bookItem = document.createElement('div');
    bookItem.setAttribute('class', 'book-item');
    bookItem.innerHTML = `
      <span class="tle-author-holder">
        <p class="book-title">${this.books[k].title}</p>
        <span>by</span>
        <p class="book-author">${this.books[k].author}</p>
      </span>
      <button class="remove-button${k}">Remove</button>
    `;
    bookListContainer.appendChild(bookItem);
  }
  this.addRemoveListeners();
}

  addRemoveListeners = () => {
    const removeBtn = document.querySelectorAll('.book-item button');
    for (let i = 0; i < removeBtn.length; i += 1) {
      removeBtn[i].addEventListener('click', () => {
        const btnClass = removeBtn[i].className;
        const index = btnClass.replace('remove-button', '');
        this.removeBook(index);
      });
    }
  }
}