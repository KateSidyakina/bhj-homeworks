const xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('#poll__title');
const pollAnswers = document.querySelector('#poll__answers');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);
    console.log(response);
    pollTitle.textContent = response.data.title;

    const answers = response.data.answers;
    console.log(answers);

    pollAnswers.innerHTML = '';

    for (let answer of answers) {
      const pollAnswer = document.createElement('button');
      pollAnswer.classList.add('poll__answer');
      pollAnswer.textContent = answer;
      
      pollAnswers.append(pollAnswer);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('poll__answer')) {
    alert('Спасибо, ваш голос засчитан!');

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();
  }
});