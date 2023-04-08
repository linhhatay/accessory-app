const mongoose = require('mongoose');
const Product = require('./productModel');

const headphoneSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    driver: {
        type: String,
    },
    effects: {
        type: String,
    },
    connection: {
        type: String,
        required: true,
    },
    earCups: {
        type: String,
        required: true,
    },
    headband: {
        type: String,
        required: true,
    },
    frequencyRange: {
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
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

const Headphone = mongoose.model('Headphone', headphoneSchema);
module.exports = Headphone;
