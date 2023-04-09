const mongoose = require('mongoose');
const slugify = require('slugify');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'A product must have a name'],
            unique: true,
        },
        slug: String,
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

productSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
