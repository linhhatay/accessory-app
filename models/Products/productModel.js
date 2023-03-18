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
    },
    {
        discriminatorKey: 'category',
        timestamps: true,
    },
);

// productSchema.statics.createProduct = async function (productData) {
//     let product;
//     if (productData.category === 'headphone') {
//         product = new Headphone(productData);
//     } else if (productData.category === 'keyboard') {
//         product = new Keyboard(productData);
//     } else if (productData.category === 'mouse') {
//         product = new Mouse(productData);
//     } else if (productData.category === 'mousepad') {
//         product = new Mousepad(productData);
//     }
//     return await product.save();
// };

// productSchema.statics.createProduct = async function (productData) {
//     const modelName = productData.category;
//     const ProductModel = mongoose.model(modelName);
//     if (!modelName) {
//         throw new Error('Invalid product type');
//     }

//     const product = new ProductModel(productData);
//     await product.save();
//     return product;
// };

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
