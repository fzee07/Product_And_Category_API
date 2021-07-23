const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    // categoryId: {
    //     type: 'int'
    // },
    categoryName: {
        type: 'string'
    },,
    {
        timestamps: true
    }
})

module.exports = mongoose.model('Category', categorySchema)
