const catchAsync = require('../utils/catchAsync');
const Product = require('../models/Products/productModel');

exports.addToCart = catchAsync(async (req, res, next) => {
    const product = await Product.findOne({ _id: req.params.id });
    const { quantity } = req.body;

    if (!req.session.cart) {
        req.session.cart = [];
    }
    const productIndex = req.session.cart.findIndex((item) => item.product._id === req.params.id);
    console.log(req.session.cart);
    if (productIndex !== -1) {
        req.session.cart[productIndex].quantity += parseInt(quantity);
    } else {
        req.session.cart.push({ product, quantity: +quantity });
    }

    res.redirect('/cart');
});

exports.removeItemCart = catchAsync(async (req, res, next) => {
    const cart = req.session.cart;
    const productIndex = cart.findIndex((item) => item.product._id === req.params.id);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
    }
    res.redirect('/cart');
});

exports.getItemCart = catchAsync(async (req, res, next) => {
    const cart = req.session.cart || [];

    res.status(200).json(cart);
});

exports.updateCart = catchAsync(async (req, res, next) => {
    const cart = req.session.cart; // Lấy giỏ hàng từ session

    // Duyệt qua mảng các sản phẩm trong giỏ hàng và cập nhật số lượng cho các sản phẩm tương ứng
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const newQuantity = parseInt(req.body[`quantity[]`][i]); // Lấy số lượng mới của sản phẩm từ req.body
        if (newQuantity) {
            product.quantity = newQuantity; // Cập nhật số lượng mới cho sản phẩm
        }
        if (newQuantity <= 0) {
            cart.splice(i, 1);
        }
    }

    // // Lưu giỏ hàng mới vào session
    req.session.cart = cart;

    res.redirect('back');
});
