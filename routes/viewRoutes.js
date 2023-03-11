const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('base');
});

router.get('/cart', function (req, res) {
    res.render('cart');
});

router.get('/product', function (req, res) {
    res.render('pages/productDetails');
});

router.get('/pay', function (req, res) {
    res.render('./pages/pay');
});

router.get('/category', function (req, res) {
    res.render('./pages/category');
});

module.exports = router;
