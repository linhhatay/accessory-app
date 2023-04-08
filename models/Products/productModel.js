const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A product must have a name'],
            unique: true,
        },
        rating: {
            type: Number,
            default: 4.5,
        },
        price: {
            type: Number,
            required: [true, 'A product must have a price'],
        },
        imageCover: {
            type: String,
            required: [true, 'A product must have a cover image'],
        },
        images: [String],
        discount: {
            type: Number,
            default: 0,
        },
        quantity: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: { type: String, required: true },
        onModel: {
            type: String,
            required: true,
        },
        specs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                refPath: 'onModel',
            },
        ],
    },
    {
        timestamps: true,
    },
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
