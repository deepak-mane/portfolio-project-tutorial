const express = require('express');

const cartController = require('../controllers/cart.controller');

const router = express.Router();
// All routes below would have /cart prefixed in app.js
router.post('/items',cartController.addCartItem); 

module.exports = router;