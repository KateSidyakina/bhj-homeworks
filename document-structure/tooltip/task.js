const elements = document.querySelectorAll('.has-tooltip');
const tooltip = document.querySelector('.tooltip');

elements.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();

    tooltip.innerText = element.title;
    tooltip.classList.toggle('tooltip_active');

    tooltip.style.left = element.getBoundingClientRect().left + 'px';
    tooltip.style.top = element.getBoundingClientRect().top + 25 + 'px';
  })
})