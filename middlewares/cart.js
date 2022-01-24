const Cart = require('../models/cart.model');

function initializeCart(req, res, next) { 
  // console.log('var:res.locals.cart is',res.locals.cart,'atloc:func initializeCart');
  let cart;
  if (!req.session.cart) {
    cart = new Cart();
  } else {
    const sessionCart = req.session.cart;
    cart = new Cart(
      sessionCart.items,
      sessionCart.totalQuantity,
      sessionCart.totalPrice
    );
  } 

  res.locals.cart = cart;

  // console.log(
  //   'var:res.locals.cart is', res.locals.cart, 
  //   'atloc:func initializeCart'
  // );
  
  next();
}

module.exports = initializeCart;