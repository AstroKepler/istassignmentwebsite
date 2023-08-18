let cart = [];
let total = 0;

function addToCart(itemName, itemPrice) {
  cart.push({ name: itemName, price: itemPrice });
  total += itemPrice; //Calculates the total price
  
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartList = document.getElementById('cart'); // finds cart list
  const totalSpan = document.getElementById('total'); // finds total list
  
  cartList.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    cartList.appendChild(li); // all of this makes it so that the HTML for each item modular
  });
  
  totalSpan.textContent = total; // total money
}
