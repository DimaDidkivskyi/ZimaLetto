import React from "react";

import { Button } from "../Button/Button";

import cartMinus from "../../assets/img/cart-minus.svg";
import cartPlus from "../../assets/img/cart-plus.svg";
import cartRemove from "../../assets/img/cart-remove.svg";

export const CartItem = ({
    id,
    name,
    size,
    image,
    totalPrice,
    totalCount,
    onRemove,
    onMinus,
    onPlus,
}) => {
    const handleRemoveClick = () => {
        onRemove(id);
    };

    const handleMinusItem = () => {
        onMinus(id);
    };

    const handlePlusItem = () => {
        onPlus(id);
    };

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img src={image} alt={name} />
            </div>
            <div className="cart__item-info">
                <h3>{name}</h3>
                <p>Medium size, {size}</p>
            </div>
            <div className="cart__item-count">
                <div onClick={handleMinusItem}>
                    <img src={cartMinus} alt="minus" />
                </div>
                <b>{totalCount}</b>
                <div onClick={handlePlusItem}>
                    <img src={cartMinus} alt="minus" />
                </div>
            </div>
            <div className="cart__item-price">
                <b>${totalPrice}</b>
            </div>
            <div className="cart__item-remove">
                <button onClick={handleRemoveClick}>
                    <img src={cartRemove} alt="remove" />
                </button>
            </div>
        </div>
    );
};
