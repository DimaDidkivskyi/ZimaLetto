import React from "react";
import { useSelector } from "react-redux";

import { CartTitle } from "../components/Cart/CartTitle";
import { CartItem } from "../components/Cart/CartItem";
import { CartFooter } from "../components/Cart/CartFooter";
import { CartBtn } from "../components/Cart/CartBtn";
import { CartEmpty } from "../components/Cart/CartEmpty";

export const Cart = () => {
    const items = useSelector(({ cart }) => cart.items);
    const addedClothes = Object.keys(items).map((key) => {
        return items[key][0];
    });

    return (
        <section className="cart">
            <div className="container">
                <CartTitle />
                <div className="cart__items">
                    {addedClothes.map((obj) => (
                        <CartItem name={obj.name} size="XL" />
                    ))}
                    {/* <CartItem name="Jersey Crewneck T-Shirt" size="XL" /> */}
                </div>
                <CartFooter />
                <CartBtn />
                {/* <CartEmpty /> */}
            </div>
        </section>
    );
};
