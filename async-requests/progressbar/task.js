const form = document.querySelector('#form');
const formData = new FormData(form);
const progress = document.getElementById( 'progress' );

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);

    xhr.upload.onprogress = function(e) {
      progress.value = e.loaded / e.total;
    }
});
