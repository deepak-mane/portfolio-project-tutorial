const express = require('express');

const productsController = require('../controllers/products.controller');

const router = express.Router();
// All below  would NOT have Anything prefixed in app.js
router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductDetails);

module.exports = router;