const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

router.route('/').post(categoryController.createCategory);

router
    .route('/:categoryId')
    .get(categoryController.getCategory)
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;
