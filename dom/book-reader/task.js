const book = document.querySelector('.book');
const fontSizes = document.querySelectorAll('.font-size');

for (let fontSize of fontSizes) {
  fontSize.addEventListener('click', (e) => {
    e.preventDefault();

    if (!fontSize.classList.contains('font-size_active')) {
      for (let fontSize of fontSizes) {
        if (fontSize.classList.contains('font-size_active')) {
          if (fontSize.dataset.size) {
            book.classList.remove(`book_fs-${fontSize.dataset.size}`);
          }

          fontSize.classList.remove('font-size_active');
        }
      }
    
      fontSize.classList.add('font-size_active');

      if (fontSize.dataset.size) {
        book.classList.add(`book_fs-${fontSize.dataset.size}`);
      } else {
        book.classList.remove(`book_fs-${fontSize.dataset.size}`);
      }
    }
  });
}