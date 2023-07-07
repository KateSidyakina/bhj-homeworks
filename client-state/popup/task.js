const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal_active');
  document.cookie = 'isModalClosed' + '=' + encodeURIComponent('true');
});

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(pair => pair.startsWith(name + '='));
  if (cookie) {
    return cookie.substring(name.length + 1);
  } else {
    return false;
  }
}

if (!getCookie('isModalClosed')) {
  modal.classList.add('modal_active');
}

console.log(document.cookie);
