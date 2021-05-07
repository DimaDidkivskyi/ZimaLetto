import React from "react";

import productPig from "../../assets/img/pig.svg";
import productTruck from "../../assets/img/delivery-truck.svg";

export const ProductAbout = ({ description, details }) => {
    console.log(details);
    return (
        <div class="product-about">
            <div className="container">
                <div className="product-about__inner">
                    <div class="product-about__info">
                        <ul class="nav-tabs">
                            <li class="nav-item">
                                <a
                                    href="#about_product"
                                    class="nav-link"
                                    data-toggle="tab"
                                >
                                    Описание
                                </a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div
                                class="tab-pane active container"
                                id="about_product"
                            >
                                <p>{description}</p>
                            </div>
                            <div
                                class="tab-pane container"
                                id="product_parametr"
                            >
                                <div class="product_ul">
                                    <p>{details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-about__sidebar">
                        <div class="title">Закажите на 3000 RUB и получите</div>
                        <div class="line">
                            <img src={productPig} alt="" />
                            <span>
                                <b>300 RUB</b> на бонусный счет
                            </span>
                        </div>
                        <div class="line">
                            <img src={productTruck} alt="" />
                            <span>
                                <b>Бесплатная доставка</b>
                            </span>
                        </div>
                        <div class="range-slide">
                            <div
                                class="range-line"
                                data-mins="0"
                                data-maxs="3000"
                            >
                                <div
                                    class="green-line"
                                    style={{ width: 60 + "%" }}
                                ></div>
                                <div
                                    class="round"
                                    data-min="1000 (минимальный заказ)"
                                ></div>
                            </div>
                            <div class="range-text">
                                Осталось <b>1988 RUB</b> до бесплатной доставки
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
