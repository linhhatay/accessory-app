const Product = require('../models/Products/productModel');
const cartController = require('../controllers/cartController');
const productController = require('../controllers/productController');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
    const products = await Product.find();
    const cart = req.session.cart || [];

    res.render('base', {
        products,
        cart,
    });
});

exports.getCartPage = (req, res) => {
    const cart = req.session.cart || [];
    res.render('cart', { cart });
};

exports.getPayPage = (req, res) => {
    res.render('./pages/pay');
};

exports.getCategoryPage = catchAsync(async (req, res, next) => {
    const products = await Product.find();

    res.render('./pages/category', { products });
});

exports.getAccountPage = (req, res) => {
    res.render('./pages/account');
};
