const mongoose = require('mongoose');
const Product = require('./productModel');

const keyboardSchema = new mongoose.Schema({
    connection: {
        type: String,
        required: true,
    },
    layout: {
        type: String,
        required: true,
    },
    keyCap: {
        type: String,
        required: true,
    },
    switch: {
        type: String,
        price: { type: Number, required: true },
        enum: ['Switch Blue', 'Switch Red', 'Switch Brown'],
    },
    driver: {
        type: Boolean,
        default: false,
        required: true,
    },
    keyConflict: {
        type: String,
        required: true,
    },
    led: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const Keyboard = mongoose.model('Keyboard', keyboardSchema);
module.exports = Keyboard;
