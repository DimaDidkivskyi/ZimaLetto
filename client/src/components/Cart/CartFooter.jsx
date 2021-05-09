import React from "react";

export const CartFooter = () => {
    return (
        <div className="cart__footer">
            <div className="left">
                <p>
                    Total products: <span>1 pc.</span>{" "}
                </p>
            </div>
            <div className="right">
                <p>
                    Total sum: <span>$1200</span>{" "}
                </p>
            </div>
        </div>
    );
};
