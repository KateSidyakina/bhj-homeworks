let clickerCounter = +document.querySelector('#clicker__counter').textContent;
let cookie = document.querySelector('#cookie');

cookie.onclick = () => {
  clickerCounter++;
  document.querySelector('#clicker__counter').textContent = clickerCounter;

  if (clickerCounter % 2 === 0) {
    cookie.width = 190;
  } else {
    cookie.width = 210;
  }
};