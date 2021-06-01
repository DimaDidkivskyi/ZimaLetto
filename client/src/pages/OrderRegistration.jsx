import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button, Header, Footer } from "../components";
import { config } from "../utils/config";

export const OrderRegistration = () => {
    const { items } = useSelector(({ cart }) => cart);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
    });

    const onSubmit = (data) => {
        const products = [];
        for (const key in items) {
            products.push({
                id: items[key].items[0].id,
                quantity: items[key].items.length,
            });
        }

        axios.post(`${config.SERVER_URL}/order/`, { ...data, products });
        console.log({ ...data, products });
    };

    return (
        <div className="order">
            {" "}
            <Header />
            <div className="container">
                <div className="order__inner">
                    <center>
                        <h1>Fill out the form bellow</h1>
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

                            {errors.exampleRequired && (
                                <span>This field is required</span>
                            )}

                            <br />
                            <Link to="cart" className="react-router__link">
                                <Button className="order-btn">Comeback</Button>
                            </Link>
                            <Link to="cart" className="react-router__link">
                                <Button className="order-btn">Checkout</Button>
                            </Link>
                        </form>
                    </center>
                </div>
            </div>
            <Footer />
        </div>
    );
};
