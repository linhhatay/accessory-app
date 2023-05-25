const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
    .route('/')
    .post(productController.uploadProductImages, productController.resizeImages, productController.createProduct)
    .get(productController.getAllProduct);

router.route('/:id').get(productController.getProduct).patch(productController.updateProduct);
router.route('/category/:categoryId').get(productController.getProductByCategory);

module.exports = router;
