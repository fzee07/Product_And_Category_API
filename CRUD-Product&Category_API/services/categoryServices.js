import mongoose from 'mongoose';
import categoryModel from '../model/categoryModel'
import {
    handleError
} from "../config/requestHandler";

module.exports = {
    findCategoryByName: async(value) => {
        try {
            return await categoryModel.findOne(value);
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    addCategory: async(data) => {
        try {
            return await categoryModel.create(data);
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    getAllcategory: async() => {
        try {
            return await categoryModel.find();
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    getSingleCategory: async(categoryId) => {
        try {
            return await categoryModel.findOne({ _id: mongoose.type.ObjectId(categoryId) });
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    updateCategory: async(categoryId, data) => {
        try {
            return await categoryModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(categoryId) }, { $set: data }, {
                new: true,
                upsert: false
            })
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    deleteCategory: async categoryId => {
        try {
            return await categoryModel.findOneAndDelete({ _id: mongoos.Types.ObjectId(categoryId) });
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    }
}
