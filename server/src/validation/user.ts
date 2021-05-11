import Joi from "joi";

export const emailSchema = Joi.object({
    fname: Joi.string().required(),

    lname: Joi.string(),

    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
    }),

    password: Joi.string().required(),
    password2: Joi.string().required(),

    user_role: Joi.string(),
});
