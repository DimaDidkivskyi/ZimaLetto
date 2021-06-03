import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

import { fetchProducts } from "../components/Products/api";
import { Pagination } from "../components";

export const ProductsList = () => {
    const [page, setPage] = React.useState(1);

    const { data, isPreviousData } = useQuery(
        ["products", page],
        () => fetchProducts(page),
        {
            keepPreviousData: true,
            staleTime: 5000,
        }
    );

    const ProductList = useMemo(() => {
        if (data) {
            return data.productList.map((product) => (
                <div key={product.id} className="products__item">
                    <Link
                        to={`/admin/${product.id}`}
                        className="react-router__link"
                    >
                        <div className="products__img">
                            <img src={product.image} alt="product" />
                        </div>
                        <div className="products__title">
                            <span>{product.name}</span>
                        </div>
                    </Link>
                    <p className="products__description">
                        {product.description}
                    </p>
                    <div className="products__price">
                        <b>{product.price}</b>
                    </div>
                </div>
            ));
        }
    }, [data]);

    return (
        <section className="products-list">
            <div className="container">
                <center>
                    <h1>Below you can edit the products in stock </h1>
                </center>
                <div className="products-list__inner">{ProductList}</div>
            </div>
            <Pagination
                page={page}
                setPage={setPage}
                productCount={data?.productCount}
                isPreviousData={isPreviousData}
            />
        </section>
    );
};
