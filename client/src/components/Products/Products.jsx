import React from "react";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";

import { fetchProducts } from "./api";
import { productsPerPage } from "../../utils/config";
import { Pagination } from "../Pagination";

export const Products = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = React.useState(1);

    const { data, isPreviousData, isLoading } = useQuery(
        ["products", page],
        () => fetchProducts(page),
        {
            keepPreviousData: true,
            staleTime: 5000,
        }
    );

    React.useEffect(() => {
        if (Math.ceil(data?.productCount / productsPerPage) < page + 1) {
            queryClient.prefetchQuery(["products", page + 1], () =>
                fetchProducts(page + 1)
            );
        }
    }, [data, page, queryClient]);

    const refContainer = useRef(null);
    React.useEffect(() => {
        if (refContainer.current) {
            window.scrollTo({
                top: refContainer.current.offsetTop - 230,
                behavior: "smooth",
                left: refContainer.current.offsetLeft,
            });
        }
    }, [page]);

    const ProductList = useMemo(() => {
        if (data) {
            return data.productList.map((product) => (
                <div key={product.id} className="products__item">
                    <Link
                        to={`/product/${product.id}`}
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
        <section className="products">
            <div className="container" ref={refContainer}>
                <div className="products__inner">
                    {isLoading ? <div>Loading...</div> : ProductList}
                </div>
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
