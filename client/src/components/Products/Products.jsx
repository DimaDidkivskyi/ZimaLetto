import React from "react";
import { useMemo, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query"; // Імпорт сторонніх бібліотек

import { fetchProducts } from "./api"; // Імпорт асинхронної функції
import { productsPerPage } from "../../utils/config"; // Імпорт функції, яка відповідає за кількість продуктів на сторінці
import { Pagination } from "../Pagination"; // Імпорт компоненту "Пагінації"

export const Products = () => {
    const queryClient = useQueryClient(); // useQueryClient повертає теперешній екземпляр QueryClient
    let { search } = useLocation(); // Хук useLocation повертає об'єкт місцезнаходження, є собою теперешній URL
    const category = new URLSearchParams(search).get("category"); // Інтерфейс URLSearchParams визначає службові методи для роботою з строками запиту URL
    const [page, setPage] = React.useState(1); // Хук useState надає функціональним компонентам доступ до стану React.

    // Функція для кешингу стану сервера
    const { data, isPreviousData, isLoading } = useQuery(
        ["products", page, category],
        () => fetchProducts(page, category),
        {
            keepPreviousData: true,
            staleTime: 5000,
        }
    );

    // Перевірка для відображання кількості продуктів на сторінці
    React.useEffect(() => {
        if (Math.ceil(data?.productCount / productsPerPage) < page + 1) {
            queryClient.prefetchQuery(["products", page + 1], () =>
                fetchProducts(page + 1, category)
            );
        }
    }, [data, page, queryClient, category]);

    // Перевірка, де по кліку на компонент пагінації за допомогою функціїї scrollTo() повертало на сторінку з певними координатами
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

    /* Обертаємо компонент ProductList у хук useMemo, далі за допомогою перевірки if та
    методу масиву map() повертаємо усі продукти з бази даних*/
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

    // Повертаємо секцію товарів та робимо перевірку чи завантажились товари на сторінці. Далі вставляємо компонент пагінації
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
