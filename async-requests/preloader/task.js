const xhr = new XMLHttpRequest();
const items = document.querySelector('#items');

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    document.querySelector('.loader').classList.remove('loader_active');
    const response = JSON.parse(xhr.responseText);
    const currencies = response.response.Valute;

    for (let currency in currencies) {
      const itemCode = document.createElement('div');
      itemCode.classList.add('item__code');
      itemCode.textContent = currencies[currency].CharCode;

      const itemValue = document.createElement('div');
      itemValue.classList.add('item__value');
      itemValue.textContent = currencies[currency].Value;

      const itemCurrency = document.createElement('div');
      itemCurrency.classList.add('item__currency');
      itemCurrency.textContent = 'руб.';

      const item = document.createElement('div');
      item.classList.add('item');
      item.append(itemCode);
      item.append(itemValue);
      item.append(itemCurrency);

      items.append(item);
    }
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();