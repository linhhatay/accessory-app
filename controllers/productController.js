const Product = require('../models/Products/productModel');
const Headphone = require('../models/Products/headphoneModel');
const Keyboard = require('../models/Products/keyboardModel');
const Mouse = require('../models/Products/mouseModel');
const Mousepad = require('../models/Products/mousepadModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

const multer = require('multer');
const sharp = require('sharp');

// prettier-ignore
const models = {
    'Tai Nghe': Headphone,
    'Bàn Phím': Keyboard,
    'Chuột': Mouse,
    'Bàn Di Chuột': Mousepad,
};

const createSubProduct = (category, data) => {
    const Model = models[category];
    if (!Model) {
        throw new Error(`Invalid category: ${category}`);
    }
    return new Model(data);
};

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
});

exports.uploadProductImages = upload.fields([
    { name: 'imageCover', maxCount: 1 },
    { name: 'images', maxCount: 20 },
]);

exports.resizeImages = catchAsync(async (req, res, next) => {
    if (!req.files.imageCover) return next();

    // 1) Cover image
    req.body.imageCover = `product-${Date.now()}-cover.jpeg`;
    await sharp(req.files.imageCover[0].buffer)
        .resize(640, 640)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`public/img/products/${req.body.imageCover}`);

    // 2) Images
    if (!req.files.images) return next();
    req.body.images = [];

    await Promise.all(
        req.files.images.map(async (file, i) => {
            const filename = `product-${Date.now()}-${i + 1}.jpeg`;

            await sharp(file.buffer)
                .resize(640, 640)
                .toFormat('jpeg')
                .jpeg({ quality: 90 })
                .toFile(`public/img/products/${filename}`);

            req.body.images.push(filename);
        }),
    );

    next();
});

exports.createProduct = catchAsync(async (req, res, next) => {
    const { name, rating, price, imageCover, images, discount, quantity, description, category, onModel, ...rest } =
        req.body;
    const productData = { name, rating, price, imageCover, images, discount, quantity, description, category, onModel };
    const subProductData = { ...rest };
    const newProduct = new Product(productData);
    const subProductObj = createSubProduct(category, subProductData);

    // switch (category) {
    //     case 'Tai Nghe':
    //         subProductObj = new Headphone(subProductData);
    //         break;
    //     case 'Bàn Phím':
    //         subProductObj = new Keyboard(subProductData);
    //         break;
    //     case 'Chuột':
    //         subProductObj = new Mouse(subProductData);
    //         break;
    //     case 'Bàn Di Chuột':
    //         subProductObj = new Mousepad(subProductData);
    //         break;
    //     default:
    //         throw new Error('Product type invalid !');
    // }

    subProductObj.product = newProduct._id;
    await subProductObj.save();

    newProduct.specs = subProductObj._id;
    await newProduct.save();

    res.status(201).json({
        status: 'success',
        data: {
            newProduct,
        },
    });
});

exports.getProductByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;

    try {
        const products = await Product.find({ category: categoryId });

        res.render('./pages/category', { products });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            error: error.message,
        });
    }
};

exports.getAllProduct = factory.getAll(Product);
exports.getProduct = factory.getOne(Product, 'specs');
exports.updateProduct = factory.updateOne(Product);
exports.deleteProduct = factory.deleteOne(Product);
