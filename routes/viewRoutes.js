const express = require('express');
const router = express.Router();
const Product = require('../models/Products/productModel');

router.get('/', async function (req, res) {
    const products = await Product.find();

    res.render('base', {
        products,
    });
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

router.get('/account', function (req, res) {
    res.render('./pages/account');
});

router.get('/admin', function (req, res) {
    res.render('./pages/admin');
});

router.get('/admin/create', function (req, res) {
    res.render('./pages/admin/create');
});

module.exports = router;
