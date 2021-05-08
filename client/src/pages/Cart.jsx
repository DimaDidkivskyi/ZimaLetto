import React from "react";

import { CartTitle } from "../components/Cart/CartTitle";
import { CartItem } from "../components/Cart/CartItem";
import { CartEmpty } from "../components/Cart/CartEmpty";

export const Cart = () => {
    return (
        <section className="cart">
            <div className="container">
                <CartTitle />
                <CartItem />
                {/* <CartEmpty /> */}
            </div>
        </section>
    );
};
