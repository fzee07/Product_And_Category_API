"use strict";

import categoryJoi from '../validation/categoryValidation';

import {
    handleResponse,
    handleError
} from "../config/requestHandler";

import {
    addCategory,
    findCategoryByName,
    getAllCategory,
    getSingleCategory,
    updateCategory,
    deleteCategory
} from '../services/categoryServices';

module.exports = {
    addCategory: async(req, res) => {
        try {
            const categoryName = req.body;

            if (!categoryName) {
                return handleResponse({
                    res,
                    msg: "Please Enter categoryName"
                });
            }

            const value = await categoryJoi.validateAsync(req.body);
            const category = await findCategoryByName(value);

            if (category) {
                return handleResponse({
                    res,
                    msg: "Category Registered already!! please create new"
                });
            } else {
                const categoryData = await addCategory(value);
                return handleResponse({
                    res,
                    msg: "Category created successfuly",
                    data: newCategory
                });
            }
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },
    getAllCategory: async(req, res) => {
        try {
            const categoryData = await getAllCategory(data);

            if (!categoryData) {
                return handleResponse({
                    res,
                    msg: "No category Available"
                });
            } else {
                return handleResponse({
                    res,
                    msg: "Category List ",
                    data: categoryData
                });
            }
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },
    getSingleCategory: async(req, res) => {
        try {
            const categoryId = req.params.body;

            if (!categoryId) {
                return handleResponse({
                    res,
                    msg: "Please provide categoryId in params"
                });
            } else {
                const singleCegtegoryData = await getSingleCategory(categoryId);

                if (!singleCegtegoryData) {
                    return handleResponse({
                        res,
                        msg: "No category Available for given Id"
                    });
                } else {
                    return handleResponse({
                        res,
                        msg: "Single Category Data",
                        data: singleCategoryData
                    });
                }
            }
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },
    updateCategory: async(req, res) => {
        try {
            const categoryId = req.params.id;
            const {
                categoryName
            } = req.body;
            const value = await categoryJoi.validateAsync({
                categoryName
            });

            if (!categoryId) {
                return handleResponse({
                    res,
                    msg: "Please provide categoryId in params"
                });
            } else {
                const category = await findCategoryByName(value);

                if (category) {
                    return handleResponse({
                        res,
                        msg: "Category already Registered"
                    });
                } else {
                    const singleUpdatedCategoryData = await updateCategory(categoryId, value);

                    if (!singleUpdatedCategoryData) {
                        return handleResponse({
                            res,
                            msg: "No category Available for given Id"
                        });
                    } else {
                        return handleResponse({
                            res,
                            msg: "Updated Category",
                            data: singleUpdatedCategoryData
                        });
                    }
                }
            }
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    },
    deleteCategory: async(req, res) => {
        try {
            const categoryId = req.params.id;
            const category = await getSingleCategory(categoryId);

            if (!category) {
                return handleResponse({
                    res,
                    msg: "No data availabe for the ID provided"
                });
            } else {
                const categoryData = await deleteCategory(categoryId);
                return handleResponse({
                    res,
                    msg: "Successfully deleted, data: categoryData "
                });
            }
        } catch (error) {
            return handleError({
                res,
                error,
                data: error
            });
        }
    }
};