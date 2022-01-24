const addToCartButtonElement = document.querySelector('#product-details button');
const cartBadgeElement = document.querySelector('.nav-items .badge');

async function addToCart() {
  const productId = addToCartButtonElement.dataset.productid;
  const csrfToken = addToCartButtonElement.dataset.csrf;

  let response;
  try {
    // below path POST --> /cart/items is configured in cart.routes.js file
    response = await fetch('/cart/items', {
      method: 'POST',
      body: JSON.stringify({
        productId: productId,
        _csrf: csrfToken,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    alert('Something went wrong -- Technical Error');
    return;
  }

  if (!response.ok) {
    alert('Something went wrong in /public/scripts/cart-management');
    return;
  }

  const responseData = await response.json();
  const newTotalQuantity = responseData.newTotalItems;
  cartBadgeElement.textContent = newTotalQuantity;
}

addToCartButtonElement.addEventListener('click', addToCart);
