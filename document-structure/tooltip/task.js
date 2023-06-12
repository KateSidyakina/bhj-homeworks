const elements = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('has-tooltip')) {
    e.preventDefault();

    if (e.target.title === tooltip.innerText) {
      tooltip.classList.remove('tooltip_active');
      return;
    }

    tooltip.innerText = e.target.title;
    tooltip.classList.add('tooltip_active');

    tooltip.style.left = e.target.getBoundingClientRect().left + 'px';
    tooltip.style.top = e.target.getBoundingClientRect().top + 25 + 'px';
  } else {
    tooltip.classList.remove('tooltip_active');
  }
});