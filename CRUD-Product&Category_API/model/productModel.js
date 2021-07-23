const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    // productID: {
    //     type: 'Number',
    //     required: true
    // },
    productName: {
        type: 'string',
        required: true
    },
    qtyPerUnit: {
        type: 'Number',
        required: true
    },
    unitPrice: {
        type: 'Number',
        required: true
    },
    unitInStock: {
        type: 'Number',
        required: true
    },
    discontinued: {
        type: 'boolean',
        required: true
    },
    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },
    {
        timestamps: true
    }
})

module.exports = mongoose.model('Product', productSchema)
