import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
    MONGODB_URL: Joi.required(),
    MONGODB_DEFAULT_LIMIT: Joi.number().default(6),
    PORT: Joi.number().default(3005)
});