import React from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";

import { fetchCategories } from "../Categories/api";

export const Categories = () => {
    const { data } = useQuery(["category"], () => {
        return fetchCategories();
    });

    console.log(data);

    let history = useHistory();

    const handleClick = (category) => {
        history.push({
            search: `?category=${category.id}`,
        });
    };

    return (
        <section className="categories">
            <div className="container">
                {data &&
                    data.data.map((category) => {
                        return (
                            <div className="categories__item" key={category.id}>
                                <button
                                    className="active"
                                    onClick={() => handleClick(category)}
                                >
                                    {category.name}
                                </button>
                            </div>
                        );
                    })}
            </div>
        </section>
    );
};
