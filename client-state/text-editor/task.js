const textarea = document.querySelector('#editor');

if (localStorage.getItem('text')) {
  textarea.value = localStorage.getItem('text');
} 

textarea.addEventListener('input', () => {
  localStorage.setItem('text', textarea.value);
});
