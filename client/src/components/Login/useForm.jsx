import { useState, useEffect } from "react";

export const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        fname: "",
        email: "",
        password: "",
        password2: "",
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
        if (Object.keys(errors).length === 0) {
            try {
                callback(values);
            } catch (e) {
                setIsSubmitting(false);
            }
        }
    };

    return { handleChange, handleSubmit, values, errors };
};
