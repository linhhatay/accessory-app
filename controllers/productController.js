const Product = require('../models/Products/productModel');
const Headphone = require('../models/Products/headphoneModel');
const Keyboard = require('../models/Products/keyboardModel');
const Mouse = require('../models/Products/mouseModel');
const Mousepad = require('../models/Products/mousepadModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

exports.createProduct = catchAsync(async (req, res, next) => {
    // const newProduct = await Product.create(req.body);
    let newProduct;
    const modelType = req.body.category;
    switch (modelType) {
        case 'Headphone':
            newProduct = await Headphone.create(req.body);
            break;
        case 'Keyboard':
            newProduct = await Keyboard.create(req.body);
            break;
        case 'Mouse':
            newProduct = await Mouse.create(req.body);
            break;
        case 'Mousepad':
            newProduct = await Mousepad.create(req.body);
            break;
        default:
            throw new Error('Product type invalid !');
    }

    res.status(201).json({
        status: 'success',
        data: {
            newProduct,
        },
    });
});

exports.getAllProduct = catchAsync(async (req, res, next) => {
    const products = await Product.find();

    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products,
        },
    });
});

exports.getProduct = factory.getOne(Product);

exports.updateProduct = factory.updateOne(Product);

exports.deleteProduct = factory.deleteOne(Product);
