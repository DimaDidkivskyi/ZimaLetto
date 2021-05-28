import React from "react";

import productPig from "../../assets/img/pig.svg";
import productTruck from "../../assets/img/delivery-truck.svg";

export const ProductAbout = ({ description, details }) => {
    return (
        <div class="product-about">
            <div className="container">
                <div className="product-about__inner">
                    <div class="product-about__info">
                        <div className="title">Details</div>

                        <div className="content">
                            <p>{description}</p>
                            <br />
                            <p>{details}</p>
                        </div>
                    </div>
                    <div class="product-about__sidebar">
                        <div class="title">Order for $300 and get:</div>
                        <div class="line">
                            <img src={productPig} alt="" />
                            <span>
                                <b>$30</b> to bonus account
                            </span>
                        </div>
                        <div class="line">
                            <img src={productTruck} alt="" />
                            <span>
                                <b>Free shipping</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
