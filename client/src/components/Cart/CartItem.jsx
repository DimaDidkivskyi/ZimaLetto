import React from "react";

import imgProduct from "../../assets/img/products.png";
import cartMinus from "../../assets/img/cart-minus.svg";
import cartPlus from "../../assets/img/cart-plus.svg";
import cartRemove from "../../assets/img/cart-remove.svg";

export const CartItem = ({ name, size }) => {
    return (
        <div className="cart__item">
            <div className="cart-left">
                <img src={imgProduct} alt="product" />
                <div className="content">
                    <div className="title">{name}</div>
                    <div className="size">Medium size, {size}</div>
                </div>
            </div>
            <div className="cart-center">
                <button className="btn">
                    <img src={cartMinus} alt="minus" />
                </button>
                <span className="count">2</span>
                <button className="btn">
                    <img src={cartPlus} alt="minus" />
                </button>
            </div>
            <div className="cart-right">
                <span className="price">$1000</span>
                <button className="btn btn--remove">
                    <img src={cartRemove} alt="remove" />
                </button>
            </div>
        </div>
    );
};
