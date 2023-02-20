import { BookCollection } from './modules/book-collection.js';
import { DateTime } from './modules/luxon.js';

const addBtn = document.getElementById('add-books');
const bookCollection = new BookCollection();

addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#au--fxthor');
  bookCollection.addBook(title.value, author.value);
  title.value = '';
  author.value = '';
});

if (localStorage.getItem('books')) {
  bookCollection.books = JSON.parse(localStorage.getItem('books'));
  bookCollection.displayBooks();
}

/* Date and time */

const now = DateTime.local();
const formatted = now.toFormat('yyyy-MM-dd HH:mm:ss');
document.getElementById('datetime').innerHTML = formatted;

/* Menu Control */

const showDiv = (index, id) => {
  document.getElementById('div1').style.display = 'none';
  document.getElementById('div2').style.display = 'none';
  document.getElementById('div3').style.display = 'none';
  document.getElementById('link1').classList.remove('active');
  document.getElementById('link2').classList.remove('active');
  document.getElementById('link3').classList.remove('active');

  id.classList.add('active');
  document.getElementById(index).style.display = 'block';
};

const links = document.querySelectorAll('.nav-menu a');
for (let n = 0; n < links.length; n += 1) {
  links[n].addEventListener('click', (e) => {
    e.preventDefault();
    const href = links[n].getAttribute('href');
    showDiv(href.replace('#', ''), links[n]);
  });
}