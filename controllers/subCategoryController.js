const SubCategory = require('../models/subCategoryModel');
const factory = require('./handlerFactory');

exports.createSubCategory = factory.createOne(SubCategory);
exports.getSubCategory = factory.getOne(SubCategory);
exports.updateSubCategory = factory.updateOne(SubCategory);
exports.deleteSubCategory = factory.deleteOne(SubCategory);
