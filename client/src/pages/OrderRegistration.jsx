import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { Header, Footer } from "../components";
import { config } from "../utils/config";

export const OrderRegistration = ({ orderProducts }) => {
    const { items } = useSelector(({ cart }) => cart);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: { productList: [] },
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
    };

    return (
        <div>
            {" "}
            <Header />
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        defaultValue=""
                        {...register("client_fname")}
                        placeholder="Enter your Firstname"
                    />
                    <br />
                    <input
                        {...register("client_lname", { required: true })}
                        placeholder="Enter your Lastname"
                    />
                    <br />
                    <input
                        {...register("client_phone", { required: true })}
                        placeholder="Enter your phone"
                    />
                    <br />
                    <input
                        {...register("client_address", { required: true })}
                        placeholder="Enter your address"
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}

                    <br />
                    <button onClick={onSubmit}>Submit</button>
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <Footer />
        </div>
    );
};
