const AppError = require('../utils/appError');
const errorController = require('../controllers/errorController');
const viewRouter = require('../routes/viewRoutes');
const userRouter = require('../routes/userRoutes');
const productRouter = require('../routes/productRoutes');
const buyingRouter = require('../routes/buyingRoutes');
const categoryRouter = require('./categoryRoutes');
const subCategoryRouter = require('./subCategoryRoutes');

function route(app) {
    app.use('/', viewRouter);
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/products', productRouter);
    app.use('/api/v1/buying', buyingRouter);
    app.use('/api/v1/category', categoryRouter);
    app.use('/api/v1/subcategory', subCategoryRouter);

    app.all('*', (req, res, next) => {
        next(new AppError(`Can't not  find ${req.originalUrl} on this server!`, 404));
    });
    app.use(errorController);
}

module.exports = route;
