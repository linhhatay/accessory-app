const mongoose = require('mongoose');
const Product = require('./productModel');

const mouseSchema = new mongoose.Schema({
    color: [
        {
            name: {
                type: String,
                enum: ['Đen', 'Trắng', 'Hồng'],
            },
            price: Number,
            quantity: Number,
        },
    ],
    sensor: {
        type: String,
    },
    dpi: {
        type: String,
    },
    tracking: {
        type: String,
    },
    pollingRate: {
        type: String,
    },
    switch: {
        type: String,
        default: 'DAREU (50 triệu lần click)',
    },
    size: {
        type: String,
    },
    cable: {
        type: String,
    },
    weight: {
        type: String,
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const Mouse = mongoose.model('Mouse', mouseSchema);
module.exports = Mouse;
