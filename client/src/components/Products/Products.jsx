import React from "react";
import { useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
    useQueryClient,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { fetchProducts } from "./api";
import { productsPerPage } from "../../utils/config";
import { Pagination } from "../Pagination/Pagination";

export const Products = () => {
    const queryClient = useQueryClient();
    const [page, setPage] = React.useState(1);

    const {
        status,
        data,
        error,
        isFetching,
        isPreviousData,
        isLoading,
    } = useQuery(["products", page], () => fetchProducts(page), {
        keepPreviousData: true,
        staleTime: 5000,
    });

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
                top: refContainer.current.offsetTop - 200,
                behavior: "smooth",
                left: refContainer.current.offsetLeft,
            });
        }
    }, [page]);

    const ProductList = useMemo(() => {
        if (data) {
            return data.productList.map((product) => (
                <div className="products__item">
                    <Link to="/product" className="products__link">
                        <div className="products__img">
                            <img src={product.image} alt="product" />
                        </div>
                        <div className="products__title">
                            <a href="/">{product.name}</a>
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
