import React from "react";

import imgProduct from "../../assets/img/products.png";
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
            <div className="cart-left">
                <img src={imgProduct} alt={name} />
                <div className="content">
                    <div className="title">{name}</div>
                    <div className="size">Medium size, {size}</div>
                </div>
            </div>
            <div className="cart-center">
                <button onClick={handleMinusItem} className="btn">
                    <img src={cartMinus} alt="minus" />
                </button>
                <span className="count">{totalCount}</span>
                <button onClick={handlePlusItem} className="btn">
                    <img src={cartPlus} alt="minus" />
                </button>
            </div>
            <div className="cart-right">
                <span className="price">{totalPrice}</span>
                <button onClick={handleRemoveClick} className="btn btn--remove">
                    <img src={cartRemove} alt="remove" />
                </button>
            </div>
        </div>
    );
};
