const joi = require('joi');

const schema = joi.object().keys({
    productName: joi.string().required(),
    qtyPerUnit: joi.number().required(),
    unitPrice: joi.string().required(),
    unitInStock: joi.number().required(),
    discontinued: joi.boolean().required(),
    categoryId: joi.string().required(),
});

export default schema;