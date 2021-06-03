import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "../components";
import { config } from "../utils/config";

export const OrderForm = ({ setSuccess }) => {
    const { items } = useSelector(({ cart }) => cart);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    const onSubmit = async (data) => {
        const products = [];
        for (const key in items) {
            products.push({
                id: items[key].items[0].id,
                quantity: items[key].items.length,
            });
        }

        const result = await axios.post(`${config.SERVER_URL}/order/`, {
            ...data,
            products,
        });
        setSuccess(result.data.ok);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="order__item">
                    <input
                        defaultValue=""
                        {...register("client_fname")}
                        placeholder="Enter your Firstname"
                    />
                </div>
                <div className="order__item">
                    <input
                        {...register("client_lname", {
                            required: true,
                        })}
                        placeholder="Enter your Last name"
                    />
                </div>
                <div className="order__item">
                    <input
                        {...register("client_phone", {
                            required: true,
                        })}
                        placeholder="Enter your phone"
                    />
                </div>
                <div className="order__item">
                    <input
                        {...register("client_address", {
                            required: true,
                        })}
                        placeholder="Enter your address"
                    />
                </div>

                {errors.exampleRequired && <span>This field is required</span>}

                <br />
                <Link to="/cart" className="react-router__link">
                    <Button className="order-btn">Comeback</Button>
                </Link>
                <Button className="order-btn">Checkout</Button>
            </form>
        </div>
    );
};
