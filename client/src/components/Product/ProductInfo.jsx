import React from "react";
import { Link } from "react-router-dom";

export const ProductInfo = ({ id, name, price, image, product_size }) => {
    console.log(product_size);
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
                            Reviews: <span>23</span>
                        </div>
                        <div class="price">
                            <span>Price per pc.</span> <b>{price}</b>
                        </div>
                        <div class="price">
                            <span>Count per pc.</span> <b>1 pc.</b>
                        </div>
                        <div className="price">
                            <span>Sizes: </span>
                            <b>
                                {product_size &&
                                    product_size.map(
                                        (item, index) => item.size_name + " "
                                    )}
                            </b>
                        </div>

                        <div class="product-info__bottom">
                            <div class="product-info__topay">
                                <span>Total: </span>
                                <b>{price}</b>
                            </div>
                            <div class="product-info__block">
                                <Link to="/cart" className="router-link">
                                    <button>To cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
