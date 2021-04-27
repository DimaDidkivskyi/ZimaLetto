import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export const Products = () => {
    const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
        fetch("http://localhost:3000/product").then((res) => res.json())
    );

    const ProductList = useMemo(() => {
        if (data) {
            return data.map((product) => (
                <div className="products__item">
                    <Link to="/product" className="products__link">
                        <div className="products__img">
                            <img src={product.image} alt="product" />
                        </div>
                        <div className="products__title">
                            <a href="">{product.name}</a>
                        </div>
                    </Link>
                    <p className="products__description">
                        {product.description}
                    </p>
                    <div className="products__rating">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span></span>
                    </div>
                    <div className="products__price">
                        <b>{product.price}</b>
                    </div>
                    <div className="products__to-cart">
                        <Link to="/product" className="products__link">
                            <span>О товаре</span>
                        </Link>
                    </div>
                </div>
            ));
        }
    }, [data]);

    return (
        <section className="products">
            <div className="container">
                <div className="products__inner">{ProductList}</div>
            </div>
        </section>
    );
};
