import React from "react";

import { CartTitle } from "../components/Cart/CartTitle";
import { CartItem } from "../components/Cart/CartItem";
import { CartFooter } from "../components/Cart/CartFooter";
import { CartBtn } from "../components/Cart/CartBtn";
import { CartEmpty } from "../components/Cart/CartEmpty";

export const Cart = () => {
    return (
        <section className="cart">
            <div className="container">
                <CartTitle />
                <CartItem />
                <CartItem />
                <CartFooter />
                <CartBtn />
                {/* <CartEmpty /> */}
            </div>
        </section>
    );
};
