const Product = require('../models/Products/productModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');
const stripe = require('stripe')(
    'sk_test_51MuWZgGVXCvTF0Pd7oWE56tEwUFiKXmnGHQ6awSWkpsV2vmztZDFsdyVcJJOgXwUebHRnlhReGoKUOIcATFqlyqR00UgM5ouPQ',
);

exports.getCheckoutSession = catchAsync((req, res, next) => {
    const product = req.session.cart;

    stripe.checkout.session.create({});
});
