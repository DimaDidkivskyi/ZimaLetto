import React from "react";

import imgArrow from "../../assets/img/cart-left-arrow.svg";

export const CartBtn = () => {
    return (
        <div className="cart__btn">
            <div className="left-btn">
                <button>
                    <img src={imgArrow} alt="arrow" />
                    Come back
                </button>
            </div>
            <div className="right-btn">
                <button>Pay now</button>
            </div>
        </div>
    );
};
