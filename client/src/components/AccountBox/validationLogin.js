import Joi from "joi";

export const loginSchema = Joi.object({
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
});
