const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    // categoryId: {
    //     type: 'int'
    // },
    categoryName: {
        type: 'string'
    }
})

module.exports = mongoose.model('Category', categorySchema)