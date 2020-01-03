var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var dict = {}; 
 dict.itemName = item;
 dict.itemPrice = Math.floor(Math.random() * (100 - 1) + 1);
 cart.push(dict);
 return (`${item} has been added to your cart.`);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
