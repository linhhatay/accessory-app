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
});

const Headphone = Product.discriminator('Headphone', headphoneSchema);
module.exports = Headphone;
