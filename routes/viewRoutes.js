const express = require('express');
const router = express.Router();
const Product = require('../models/Products/productModel');
const cartController = require('../controllers/cartController');
const productController = require('../controllers/productController');

router.get('/', async function (req, res) {
    const products = await Product.find();
    const cart = req.session.cart || [];

    res.render('base', {
        products,
        cart,
    });
});

router.get('/cart', function (req, res) {
    const cart = req.session.cart || [];
    res.render('cart', { cart });
});

router.get('/pay', function (req, res) {
    res.render('./pages/pay');
});

router.get('/category', async function (req, res) {
    const products = await Product.find();

    res.render('./pages/category', { products });
});

router.get('/category/:categoryId', productController.getProductByCategory);

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
    const cart = req.session.cart || [];

    res.render('pages/productDetails', { product, cart });
});

module.exports = router;
