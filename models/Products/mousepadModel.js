const mongoose = require('mongoose');
const Product = require('./productModel');

const mousepadSchema = new mongoose.Schema({
    dimensions: [
        {
            type: String,
        },
    ],
    pattern: [
        {
            type: String,
            enum: ['Black', 'Pink', 'Swallow', 'Dream'],
        },
    ],
});

const Mousepad = Product.discriminator('Mousepad', mousepadSchema);
module.exports = Mousepad;
