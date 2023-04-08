const mongoose = require('mongoose');

const mousepadSchema = new mongoose.Schema({
    dimensions: [
        {
            type: String,
        },
    ],
    pattern: [
        {
            type: {
                type: String,
                enum: ['Black', 'Pink', 'Swallow', 'Dream'],
            },
            price: Number,
            quantity: Number,
        },
    ],
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const Mousepad = mongoose.model('Mousepad', mousepadSchema);
module.exports = Mousepad;
