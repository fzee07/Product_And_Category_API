const mongoose = require('mongoose');
const productModel = require('../model/productModel');

export const findProductByName = async(productName) => {
    return await productModel.findOne({ productName: productName });
}

export const addProduct = async(data) => {
    return await productModel.create(data);
}

export const getSingleProduct = async(productId) => {
    return await productModel.findOne({ _id: mongoose.Types.ObjectId(productId) })
}

export const getAllProducts = async() => {
    return await productModel.find();
}

export const updateProduct = async(productId, data) => {
    return await ProductModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(productId) }, data, {
        new: true,
        upsert: true,
    });
};

export const deleteProduct = async(productId) => {
    return await ProductModel.findOneAndDelete({ _id: mongoose.Types.ObjectId(productId) })
}