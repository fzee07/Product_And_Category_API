import mongoose from 'mongoose';
import productModel from '../model/productModel';
import {
    handleError
} from "../config/requestHandler";


module.exports = {
    findProductByName: async(productName) => {
        try {
            return await productModel.findOne({ productName: productName });
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    addProduct: async(data) => {
        try {
            return await productModel.create(data);
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    getSingleProduct: async(productId) => {
        try {
            return await productModel.findOne({ _id: mongoose.Types.ObjectId(productId) })
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    getAllProducts: async() => {
        try {
            return await productModel.find();
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    updateProduct: async(productId, data) => {
        try {
            return await ProductModel.findOneAndUpdate({ _id: mongoose.Types.ObjectId(productId) }, data, {
                new: true,
                upsert: true,
            });
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },

    deleteProduct: async(productId) => {
        try {
            return await ProductModel.findOneAndDelete({ _id: mongoose.Types.ObjectId(productId) })
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    }
}
