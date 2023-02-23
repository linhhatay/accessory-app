const dotenv = require('dotenv');

process.on('uncaughtException', (err) => {
    console.log('UNHANDLED EXCEPTION! Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config();

const db = require('./configs/db');
const app = require('./app');
const port = process.env.PORT || 3000;

db.connect();

const server = app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});
