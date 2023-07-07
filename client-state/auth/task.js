const form = document.querySelector('#signin__form');
const signIn = document.querySelector('.signin');
const welcome = document.querySelector('.welcome');
const userIdText = document.querySelector('#user_id');

if (localStorage.getItem('userId')) {
  signIn.classList.remove('signin_active');
  welcome.classList.add('welcome_active');
  userIdText.textContent = localStorage.getItem('userId');
} else {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('load', () => {
      const data = JSON.parse(xhr.response);
      
      if (!data.success) {
        alert('Неверный логин/пароль');
      } else {
        localStorage.setItem('userId', data.user_id);
        signIn.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userIdText.textContent = localStorage.getItem('userId');
      }
    });
  });
}