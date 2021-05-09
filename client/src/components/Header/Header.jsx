import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Form } from "../Login/Form";

import headerLogo from "../../assets/img/logo.svg";
import headerPhone from "../../assets/img/phone.svg";
import headerPerson from "../../assets/img/person.svg";
import headerCart from "../../assets/img/shopping-cart.svg";

export const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [header, setHeader] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 400) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    };

    window.addEventListener("scroll", changeBackground);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className={header ? "header active" : "header"}>
            <div className="container">
                <div className="header__inner">
                    <div className="header__item">
                        <Link to="/">
                            <div className="header__logo">
                                <img src={headerLogo} alt="" />
                            </div>
                        </Link>

                        <nav className="header__menu">
                            <ul>
                                <Link to="/" className="header__link">
                                    <li>
                                        <span>Catalog</span>
                                    </li>
                                </Link>
                                <Link to="/delivery" className="header__link">
                                    <li>
                                        <span>Shipping</span>
                                    </li>
                                </Link>
                                <Link to="/payment" className="header__link">
                                    <li>
                                        <span>Payment</span>
                                    </li>
                                </Link>
                                <Link to="/contacts" className="header__link">
                                    <li>
                                        <span>Contacts</span>
                                    </li>
                                </Link>
                            </ul>
                        </nav>
                    </div>
                    <div className="header__item">
                        <div className="header__phone">
                            <img src={headerPhone} alt="" />
                            <span>+ 1-888-866-6948</span>
                        </div>
                        <button onClick={openModal} className="header__user">
                            <img src={headerPerson} alt="" />
                        </button>
                        <Form
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />

                        <Link to="/cart">
                            <div className="header__cart">
                                <img src={headerCart} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
