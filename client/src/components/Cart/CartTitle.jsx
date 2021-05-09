import React from "react";

import imgCart from "../../assets/img/cart-cart.svg";
import imgTrash from "../../assets/img/cart-trash.svg";

export const CartTitle = () => {
    return (
        <div className="cart__title">
            <div className="cart-left">
                <img src={imgCart} alt="cart" />
                <h2>Cart</h2>
            </div>
            <div className="cart-right">
                <img src={imgTrash} alt="" />
                <span>Clear cart</span>
            </div>
        </div>
    );
};
