const form = document.querySelector('#tasks__form');
const input = document.querySelector('#task__input');
const btn = document.querySelector('#tasks__add');
const list = document.querySelector('#tasks__list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!input.value.trim()) {
    return;
  }

  const task = document.createElement('div');
  task.classList.add('task');

  const taskTitle = document.createElement('div');
  taskTitle.classList.add('task__title');
  taskTitle.textContent = input.value;

  const taskRemove = document.createElement('a');
  taskRemove.classList.add('task__remove');
  taskRemove.innerHTML = '&times;';
  taskRemove.href = '#';

  task.append(taskTitle);
  task.append(taskRemove);
  list.append(task);

  form.reset();
});

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('task__remove')) {
    e.preventDefault();
    e.target.closest('.task').remove();
  }
});