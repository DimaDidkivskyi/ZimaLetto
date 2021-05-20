import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { CartItem } from "../components/Cart/CartItem";
import { Button } from "../components/Button/Button";

import {
    clearCart,
    removeCartItem,
    plusCartItem,
    minusCartItem,
} from "../redux/actions/cart";

import imgCart from "../assets/img/cart-cart.svg";
import imgTrash from "../assets/img/cart-trash.svg";
import imgArrow from "../assets/img/cart-left-arrow.svg";
import cartEmpty from "../assets/img/empty-cart.png";

export const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

    const addedClothes = Object.keys(items).map((key) => {
        return items[key].items[0];
    });

    const onClearCart = () => {
        if (window.confirm("Are you sure you want to empty the trash?")) {
            dispatch(clearCart());
        }
    };

    const onRemoveCartItem = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(removeCartItem(id));
        }
    };

    const onPlusItem = (id) => {
        dispatch(plusCartItem(id));
    };

    const onMinusItem = (id) => {
        dispatch(minusCartItem(id));
    };

    const onClickOrder = () => {
        console.log("Your order: ", items);
    };

    return (
        <section className="cart">
            <div className="container">
                {totalCount ? (
                    <div className="cart cart--full">
                        <div className="cart__title">
                            <div className="cart-left">
                                <img src={imgCart} alt="cart" />
                                <h2>Cart</h2>
                            </div>
                            <div className="cart-right">
                                <img src={imgTrash} alt="" />
                                <span onClick={onClearCart}>Clear cart</span>
                            </div>
                        </div>
                        <div className="cart__items">
                            {addedClothes.map((obj) => (
                                <CartItem
                                    key={obj.id}
                                    id={obj.id}
                                    name={obj.name}
                                    size="XL"
                                    totalPrice={items[obj.id].totalPrice}
                                    totalCount={items[obj.id].items.length}
                                    onRemove={onRemoveCartItem}
                                    onMinus={onMinusItem}
                                    onPlus={onPlusItem}
                                />
                            ))}
                        </div>
                        <div className="cart__footer">
                            <div className="left">
                                <p>
                                    Total products:{" "}
                                    <span>{totalCount} pc.</span>{" "}
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
                                <button onClick={onClickOrder}>Pay now</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="cart cart--empty">
                        <h2>
                            Cart is empty <icon>😕</icon>
                        </h2>
                        <p>
                            Most likely, you haven't ordered anything yet.
                            <br />
                            To place an order, go to the main page.
                        </p>
                        <img src={cartEmpty} alt={items.name} />

                        <Link to="/" className="cart__link">
                            <Button className="button button--cart">
                                <span>Come back</span>
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};
