import React from "react";
import { useState } from "react";

import ImageSlider from "../components/Slider/ImageSlider";
import { SliderData } from "../components/Slider/SliderData";
import { Categories } from "../components/Categories/Categories";
import { Products } from "../components/Products/Products";
import { Posts2 } from "../components/Pagination/Posts2";

export const Home = () => {
    const categoryNames = [
        "Футболки",
        "Шорты",
        "Кроссовки",
        "Ветровки",
        "Поло",
        "Джинсы",
        "Худи",
        "Бейсболки",
    ];

    return (
        <div>
            <ImageSlider slides={SliderData} />
            <Categories />
            <Products />
            <Posts2 />
        </div>
    );
};
