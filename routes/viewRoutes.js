const express = require('express');
const router = express.Router();
const Product = require('../models/Products/productModel');
const cartController = require('../controllers/cartController');

router.get('/', async function (req, res) {
    const products = await Product.find();

    res.render('base', {
        products,
    });
});

router.get('/cart', function (req, res) {
    const cart = req.session.cart || [];
    res.render('cart', { cart });
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

router.post('/:id/add-to-cart', cartController.addToCart);
router.get('/:id/remove', cartController.removeItemCart);
router.get('/get-cart', cartController.getItemCart);
router.post('/cart/update', cartController.updateCart);

router.get('/:slug', async function (req, res) {
    const product = await Product.findOne({ slug: req.params.slug });

    res.render('pages/productDetails', { product });
});

module.exports = router;
