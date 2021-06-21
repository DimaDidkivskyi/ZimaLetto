import Joi from "joi";

export const registrationSchema = Joi.object({
    fname: Joi.string().required().messages({
        "string.empty": "Field is required",
    }),

    lname: Joi.string().messages({
        "string.empty": "Field is required",
    }),

    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .messages({
            "string.empty": "Field is required",
        }),

    password: Joi.string().required().messages({
        "string.empty": "Field is required",
    }),

    password2: Joi.string().required().valid(Joi.ref("password")).messages({
        "any.only": "passwords must match",
        "string.empty": "Field is required",
    }),
    user_role: Joi.string(),
});
