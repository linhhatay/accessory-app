const mongoose = require('mongoose');
const Product = require('./productModel');

const keyboardSchema = new mongoose.Schema({
    connection: {
        type: String,
    },
    layout: {
        type: String,
    },
    keyCap: {
        type: String,
    },
    switch: [
        {
            type: {
                type: String,
            },
            price: { type: Number, required: true },
            quantity: {
                type: Number,
                default: 10,
            },
        },
    ],
    driver: {
        type: Boolean,
        default: false,
    },
    keyConflict: {
        type: String,
    },
    led: {
        type: String,
    },
    weight: {
        type: String,
    },
    size: {
        type: String,
    },
    cable: {
        type: String,
    },
    compatibility: { type: String },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const Keyboard = mongoose.model('Keyboard', keyboardSchema);
module.exports = Keyboard;
