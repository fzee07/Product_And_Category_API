const joi = require('joi');

const schema = joi.object().keys({
    categoryName: joi.string().required(),
});

export default schema;