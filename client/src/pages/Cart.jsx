import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { CartItem } from "../components/Cart/CartItem";
import { CartEmpty } from "../components/Cart/CartEmpty";

import imgCart from "../assets/img/cart-cart.svg";
import imgTrash from "../assets/img/cart-trash.svg";
import imgArrow from "../assets/img/cart-left-arrow.svg";

export const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
    const addedClothes = Object.keys(items).map((key) => {
        return items[key][0];
    });

    return (
        <section className="cart">
            <div className="container">
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
                <div className="cart__items">
                    {addedClothes.map((obj) => (
                        <CartItem name={obj.name} size="XL" totalPrice={}/>
                    ))}
                    {/* <CartItem name="Jersey Crewneck T-Shirt" size="XL" /> */}
                </div>
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
                {/* <CartEmpty /> */}
            </div>
        </section>
    );
};
