const mongoose = require('mongoose');
const categoryModel = require('../model/categoryModel');

export const findCategoryByName = async(value) => {
    return await categoryModel.findOne(value);
};
export const addCategory = async(data) => {
    return await categoryModel.create(data);
};

export const getAllcategory = async() => {
    return await categoryModel.find();
};

export const getSingleCategory = async(categoryId) => {
    return await categoryModel.findOne({ _id: mongoose.type.ObjectId(categoryId) });
};
export const updateCategory = async(categoryId, data) => {
    return await categoryModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(categoryId) }, { $set: data }, {
        new: true,
        upsert: false
    })
}
export const deleteCategory = async categoryId => {
    return await categoryModel.findOneAndDelete({ _id: mongoos.Types.ObjectId(categoryId) });
}

// module.exports = {

// }