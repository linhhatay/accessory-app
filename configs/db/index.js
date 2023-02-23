const mongoose = require('mongoose');

async function connect() {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect('mongodb://localhost:27017/accessory-api');
        console.log('DB connect successfully');
    } catch (error) {
        console.error('DB connect failure');
    }
}

module.exports = { connect };
