const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
    .route('/')
    .post(productController.uploadProductImages, productController.resizeImages, productController.createProduct)
    .get(productController.getAllProduct);

router.route('/:id').get(productController.getProduct);

module.exports = router;
