const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('base');
});

router.get('/cart', function (req, res) {
    res.render('cart');
});

<<<<<<< HEAD
router.get('/product', function (req, res) {
    res.render('pages/productDetails');
=======
router.get('/pay', function (req, res) {
    res.render('./pages/pay');
>>>>>>> ad342a7a05e928a8e5ddeacd4423be2cd3f628f6
});

module.exports = router;
