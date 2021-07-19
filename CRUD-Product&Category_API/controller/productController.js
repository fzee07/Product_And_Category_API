const productJoi = require("../validation/productValidation");
const { handleResponse, handleError } = require("../config/requestHandler");
const {
    addProduct,
    findProductByName,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
} = require("../services/productServices");

module.exports = {
    addProduct: async(req, res) => {
        try {
            const value = await produJoi.validateAsync(req.body);
            const productName = req.body;
            const product = await findProductByName(productName);
            if (prodcut) {
                return handleResponse({ res, msg: "product Registered already!! please create new" });
            } else {
                const productData = await addProduct(value);
                return handleResponse({ res, msg: "Product added successfully", data: productData });
            }

        } catch (error) {
            return handleError({ res, error, data: error })
        }
    },
    getAllProducts: async(req, res) => {
        try {
            const products = await getAllProducts();
            if (!products) {
                return res.handleError({ res, msg: "No products found" })
            } else {
                return handleResponse({ res, msg: "Products found", data: products })
            }
        } catch (error) {
            return handleError({ res, error, data: error });

        }
    },

    getSingleProduct: async(req, res) => {
        try {
            const productID = req.params.id;
            if (!productID) {
                return handleResponse({ res, msg: "Provide the product ID" });
            } else {
                const singleProduct = await getSingleProduct(productID);
                if (!singleProduct) {
                    retrun handleResponse({ res, msg: "No Data available for this ID" });
                } else {
                    return handleResponse({ res, msg: "Product Data", data: singleProduct });
                }
            }
        } catch (error) {
            return handleError({ res, error, data: error });
        }
    },

    updateProduct: async(req, res) => {
        try {
            const productId = req.params.id;
            if (!productId) {
                return handleResponse({ res, msg: "Provide the product ID" });
            } else {}
            const updateSinlgeProduct = await updateProduct(productId, req.body);
            if (!updateSingleProduct) {
                return handleResponse({ res, msg: "No product available" });
            } else {
                return handleResponse({ res, msg: "Product updated", data: updateSingleProduct });
            }

        } catch (error) {
            return handleError({ res, error, data: error })
        }
    },

    deleteProduct: async(req, res) => {
        try {
            const productId = req.params.id;
            const toBeDeletedData = await getSingleProduct(productId);
            if (!toBeDeletedData) {
                return handleResponse({ res, msg: "There is no rpoduct to be deleted" })
            } else {
                const data = await deleteProduct(productId);
                return handleResponse({ res, msg: "Product Deleted", data: data });
            }
        } catch (error) {
            return handleError({ res, error, data: error })
        }
    }
}