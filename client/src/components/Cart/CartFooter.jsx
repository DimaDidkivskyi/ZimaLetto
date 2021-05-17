import React from "react";
import { useSelector } from "react-redux";

export const CartFooter = () => {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

    return (
        <div className="cart__footer">
            <div className="left">
                <p>
                    Total products: <span>{totalCount} pc.</span>{" "}
                </p>
            </div>
            <div className="right">
                <p>
                    Total sum: <span>{totalPrice}</span>{" "}
                </p>
            </div>
        </div>
    );
};
