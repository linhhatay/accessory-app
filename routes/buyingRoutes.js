const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const buyingController = require('../controllers/buyingController');

router.get('/checkout-session/:productId', buyingController.getCheckoutSession);

module.exports = router;
