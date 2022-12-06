const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/binhdt');
        console.log("Connect successfully!");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connect };