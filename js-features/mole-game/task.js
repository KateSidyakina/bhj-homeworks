let holes = document.querySelectorAll('.hole');
let dead = +document.querySelector('#dead').textContent;
let lost = +document.querySelector('#lost').textContent;

function clearStat(text) {
  alert(text);
  dead = 0;
  lost = 0;
  document.querySelector('#dead').textContent = 0;
  document.querySelector('#lost').textContent = 0;
}

for (let hole of holes) {
  hole.onclick = () => {
    if (hole.classList.contains('hole_has-mole')) {
      dead++;
      document.querySelector('#dead').textContent = dead;
    } else {
      lost++;
      document.querySelector('#lost').textContent = lost;
    }

    if (dead === 10) {
      clearStat('Вы выиграли!');
    } else if (lost === 5) {
      clearStat('Вы проиграли!');
    }
  };
}