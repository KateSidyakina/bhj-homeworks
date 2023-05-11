let timer = +document.querySelector('#timer').textContent;

const interval = setInterval(() => {
  timer--;
  document.querySelector('#timer').textContent = timer;

  if (timer === 0) {
    clearInterval(interval);
    alert('Вы победили в конкурсе!');
  }
}, 1000);

