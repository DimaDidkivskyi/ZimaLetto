import React from "react";
import { Link } from "react-router-dom";

import cartEmpty from "../../assets/img/empty-cart.png";

export const CartEmpty = () => {
    return (
        <div>
            <div class="cart cart--empty">
                <h2>
                    Корзина пустая <icon>😕</icon>
                </h2>
                <p>
                    Вероятней всего, вы ничего еще не заказали.
                    <br />
                    Для того, чтобы сделать заказ, перейдите на главную
                    страницу.
                </p>
                <img src={cartEmpty} alt="Empty cart" />
                <Link to="/" className="cart__link">
                    <a href="/" class="button">
                        <span>Вернуться назад</span>
                    </a>
                </Link>
            </div>
        </div>
    );
};
