import React from "react";

import {
    Header,
    Footer,
    SliderData,
    Categories,
    Products,
} from "../components";
import ImageSlider from "../components/Slider/ImageSlider";

export const Home = () => {
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
