import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "../Registration/useForm";
import { validateInfo } from "../Registration/validateInfo";

export const AuthorizationLogin = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validateInfo
    );

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        name="fname"
                        className="form-input"
                        placeholder="Enter your username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className="form-input-btn" type="submit">
                    Log in
                </button>
                <span className="form-input-login">
                    You don't have an account? Sign in{" "}
                    <Link className="react-router__link" to="/profile">
                        here
                    </Link>{" "}
                </span>
            </form>
        </div>
    );
};
