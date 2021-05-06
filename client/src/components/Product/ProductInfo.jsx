import React from "react";

export const ProductInfo = ({ id, name, price, image }) => {
    return (
        <section className="product-info">
            <div className="container">
                <div class="product-info__top">
                    <div class="img">
                        <img src={image} alt={name} />
                    </div>
                    <div class="product-info__sidebar">
                        <div class="title">{name}</div>
                        <div class="rating">
                            <span class="active"></span>
                            <span class="active"></span>
                            <span class="active"></span>
                            <span class="active"></span>
                            <span></span>
                        </div>
                        <div class="reviews">
                            Кол-во отзывов: <span>23</span>
                        </div>
                        <div class="price">
                            <span>Цена за шт.</span> <b>{price}</b>
                        </div>
                        <div class="price">
                            <span>Кол-во шт.</span> <b>1 шт.</b>
                        </div>
                        <div class="price">
                            <span>Количество</span>

                            <div class="input_range">
                                <button class="button">–</button>
                                <span class="counter">
                                    <b>1 шт.</b>
                                </span>
                                <button class="button">+</button>
                            </div>
                        </div>
                        <div class="product-info__bottom">
                            <div class="product-info__topay">
                                <span>Итого к оплате</span>
                                <b>{price}</b>
                            </div>
                            <div class="product-info__block">
                                <button class="pay-popup">Купить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
