const express = require('express');
const Cart = require('../models/Cart');
const router = express.Router();

const cartController = require('../controllers/CartController');

router.get('/', cartController.getCartByEmail)
router.post('/', cartController.addToCart)
router.delete('/:id', cartController.deleteCart)
router.put('/:id', cartController.updateCart)
router.get('/:id', cartController.getSingleCart)

module.exports = router;