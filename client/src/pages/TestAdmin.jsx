import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { config } from "../utils/config";

export const TestAdmin = () => {
    const { id } = useParams();
    const { register, handleSubmit, setValue, reset, getValues, watch } =
        useForm({
            mode: "all",
            defaultValues: { product_size: [] },
        });

    const { data: existingProduct } = useQuery(["admin_product", id], () => {
        if (id) {
            return axios.get(`${config.SERVER_URL}/product/${id}`);
        }
    });

    useEffect(() => {
        if (existingProduct && existingProduct.data) {
            const { product_size, category } = existingProduct.data;

            reset({
                ...existingProduct.data,
                image: undefined,
                category: category.id,
                product_size: undefined,
            });

            setValue(
                "product_size",
                product_size.map((item) => item.id)
            );
        }
    }, [existingProduct, reset, setValue]);

    const onSubmit = (data) => {
        const formData = new FormData();
        for (const key in data) {
            if (key === "image") {
                data[key] &&
                    data[key].length &&
                    formData.append(key, data[key][0]);
            } else if (Array.isArray(data[key]) && data[key].length) {
                for (let i = 0; i < data[key].length; i++) {
                    formData.append(`${key}[]`, data[key][i]);
                }
            } else {
                formData.append(key, data[key]);
            }
        }

        axios.post(`${config.SERVER_URL}/product/${id ? id : ""}`, formData);
    };

    const { data: categoryData } = useQuery("categories", () =>
        axios.get(`${config.SERVER_URL}/category`)
    );

    const { data: sizeData } = useQuery("size", () =>
        axios.get(`${config.SERVER_URL}/size`)
    );

    register("category");
    register("product_size");
    watch("category");
    watch("product_size");

    const categoryOptions = useMemo(
        () =>
            categoryData &&
            categoryData.data.map((category) => {
                return { value: category.id, label: category.name };
            }),
        [categoryData]
    );

    const sizeOptions = useMemo(
        () =>
            sizeData &&
            sizeData.data.map((size) => {
                return { value: size.id, label: size.size_name };
            }),
        [sizeData]
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            name
            <br />
            <input type="text" {...register("name")} />
            <br />
            $ <input type="text" {...register("price")} />
            <br />
            <input type="file" {...register("image")} />
            <br />
            <input type="text" {...register("description")} />
            <br />
            <br />
            CATEGORY
            <br />
            <Select
                value={
                    categoryOptions &&
                    categoryOptions.find(
                        (category) => category.value === getValues().category
                    )
                }
                onChange={(data) => {
                    setValue("category", data.value);
                }}
                options={categoryOptions}
            />
            <br />
            VISIBLE
            <br />
            <input type="checkbox" {...register("is_visible")} />
            <br />
            DETAILS
            <br />
            <input type="text" {...register("details")} />
            <br />
            SIZE
            <br />
            <Select
                value={
                    sizeOptions &&
                    sizeOptions.filter(
                        (size) =>
                            getValues().product_size &&
                            getValues().product_size.includes(size.value)
                    )
                }
                onChange={(data) => {
                    setValue(
                        "product_size",
                        data.map((item) => item.value)
                    );
                }}
                isMulti
                options={sizeOptions}
            />
            <br />
            SUBMIT
            <input type="submit" />
        </form>
    );
};
