const mongoose = require('mongoose');
const Product = require('./productModel');

const mouseSchema = new mongoose.Schema({
    color: [
        {
            type: String,
            enum: ['Đen', 'Trắng', 'Hồng'],
        },
    ],
    sensor: {
        type: String,
        required: true,
    },
    dpi: {
        type: String,
        required: true,
    },
    tracking: {
        type: String,
        required: true,
    },
    pollingRate: {
        type: String,
        required: true,
    },
    switch: {
        type: String,
        default: 'DAREU (50 triệu lần click)',
    },
    size: {
        type: String,
        required: true,
    },
    cable: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
});

const Mouse = Product.discriminator('Mouse', mouseSchema);
module.exports = Mouse;
