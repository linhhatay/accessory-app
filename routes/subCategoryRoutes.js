const express = require('express');
const router = express.Router();

const subCategoryController = require('../controllers/subCategoryController');

router.route('/').post(subCategoryController.createSubCategory);

router
    .route('/:subCategoryId')
    .get(subCategoryController.getSubCategory)
    .patch(subCategoryController.updateSubCategory)
    .delete(subCategoryController.deleteSubCategory);

module.exports = router;
