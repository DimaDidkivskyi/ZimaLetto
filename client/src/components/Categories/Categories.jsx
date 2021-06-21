import React from "react";
import { useQuery } from "react-query";
import { useHistory, useLocation } from "react-router-dom";

import { fetchCategories } from "../Categories/api";

export const Categories = () => {
    let { search } = useLocation();
    const activeCategory = new URLSearchParams(search).get("category");

    const { data } = useQuery(["category"], () => {
        return fetchCategories();
    });

    let history = useHistory();

    const handleClick = (category) => {
        history.push({
            search: `?category=${category.id}`,
        });
    };

    return (
        <section className="categories">
            <div className="container">
                <div className="categories__inner">
                    <div className="categories__item">
                        <button
                            className={!activeCategory ? "active" : ""}
                            onClick={() => handleClick({ id: "" })}
                        >
                            All
                        </button>
                    </div>
                    {data &&
                        data.data.map((category) => {
                            return (
                                <div
                                    className="categories__item"
                                    key={category.id}
                                >
                                    <button
                                        className={
                                            activeCategory === category.id
                                                ? "active"
                                                : ""
                                        }
                                        onClick={() => handleClick(category)}
                                    >
                                        {category.name}
                                    </button>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
};
