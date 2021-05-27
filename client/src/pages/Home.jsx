import React from "react";
import { useState } from "react";

import {
    Header,
    Footer,
    SliderData,
    Categories,
    Products,
} from "../components";
import ImageSlider from "../components/Slider/ImageSlider";

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
            <Header />
            <ImageSlider slides={SliderData} />
            <Categories />
            <Products />
            <Footer />
        </div>
    );
};
