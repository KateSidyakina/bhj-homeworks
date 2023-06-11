document.body.addEventListener('click', (e) => {
  if (e.target.classList.contains('product__quantity-control_dec')) {
    
    if (Number(e.target.nextElementSibling.textContent) === 1) {
      return;
    } else {
      e.target.nextElementSibling.textContent = Number(e.target.nextElementSibling.textContent) - 1;
    }
  }

  if (e.target.classList.contains('product__quantity-control_inc')) {
    e.target.previousElementSibling.textContent = Number(e.target.previousElementSibling.textContent) + 1;
  }

  if (e.target.classList.contains('product__add')) {

    const cartProducts = document.querySelectorAll('.cart__product');
    const currentCartProduct = document.querySelector(`.cart__product[data-id="${e.target.closest('.product').dataset.id}"]`);
    
    function createProduct() {
      const cartProduct = document.createElement('div');
      cartProduct.classList.add('cart__product');
      cartProduct.dataset.id = e.target.closest('.product').dataset.id;

      const cartProductImage = document.createElement('img');
      cartProductImage.classList.add('cart__product-image');
      cartProductImage.src = e.target.closest('.product').querySelector('.product__image').src;

      const cartProductCount = document.createElement('div');
      cartProductCount.classList.add('cart__product-count');
      cartProductCount.textContent = e.target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;

      cartProduct.append(cartProductImage);
      cartProduct.append(cartProductCount);

      document.querySelector('.cart__products').append(cartProduct);
    }

    if (cartProducts.length === 0) {
      createProduct();
      return;
    }


    if (currentCartProduct) {
     currentCartProduct.querySelector('.cart__product-count').textContent = e.target.closest('.product__quantity').querySelector('.product__quantity-value').textContent;
    } else {
      createProduct();
    }
  }
})