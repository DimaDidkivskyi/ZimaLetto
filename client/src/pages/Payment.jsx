import React from "react";
import { Link } from "react-router-dom";

import arrow from "../assets/img/payment-arrow.svg";

export const Payment = () => {
    return (
        <section className="payment">
            <div className="container">
                <h1 className="payment__title">Payment</h1>

                <div className="payment__item">
                    <h2>When will i be charged?</h2>
                    <p>
                        If you are paying by credit card, you will not be
                        charged until your order has shipped. When paying by
                        debit and bank check cards, your payment will debit from
                        your account immediately.
                    </p>
                </div>
                <div className="payment__item">
                    <h2>What forms of payment do you accept?</h2>
                    <ul>
                        <li>Visa</li>
                        <li>MasterCard</li>
                        <li>PayPal</li>
                        <li>Apple Pay</li>
                        <li>Zimaletto Gift Card</li>
                    </ul>
                </div>
                <div className="payment__item">
                    <h2>We do not accept the following forms of payment:</h2>
                    <ul>
                        <li>CODs</li>
                        <li>Checks</li>
                        <li>Layaway plans</li>
                        <li>
                            Credit cards issued from Afghanistan, Angola,
                            Central African Republic, Cote d'Ivoire, Cuba,
                            Egypt, Ghana, Iran, Iraq, Democratic People's
                            Republic of Korea, Liberia, Libya, Myanmar, Nigeria,
                            Russia, Sierra Leone, Somalia, Sudan and Syria.
                        </li>
                    </ul>
                </div>
                <div className="payment__item">
                    <h2>Why isn't my payment going through?</h2>
                    <p>
                        Make sure that your billing name and address match the
                        credit card you're using for payment. We reserve the
                        right to cancel any order that does not match these
                        criteria.
                    </p>
                </div>
                <div className="payment__item">
                    <h2>Do you accept PayPal?</h2>
                    <p>
                        Yes, Zimaletto accepts PayPal payments. Please note that
                        if you are using PayPal as your payment option, you will
                        continue through the standard checkout process. Once you
                        click to submit your order, you will be redirected to
                        PayPal.com to complete your payment. You will have 25
                        minutes to complete the checkout process and your order
                        will not be submitted until you have finished the
                        process on PayPal.com. <br />
                        For more information, visit the{" "}
                        <a
                            href="https://www.paypal.com/us/smarthelp/home"
                            target="blank"
                        >
                            PayPal help center.
                        </a>
                    </p>
                </div>

                <div className="payment__item">
                    <h2>How much will i be charged for TAX?</h2>
                    <p>
                        Taxes will be charged based on the applicable state and
                        local percentage and price of your merchandise total
                        and, where required by law, on shipping and handling
                        charges.
                    </p>
                </div>

                <div className="payment__btn">
                    <Link to="/" className="payment__link">
                        <span className="btn-left">To catalog</span>
                    </Link>
                    <Link to="/delivery" className="payment__link">
                        <span className="btn-right">
                            Shipping <img src={arrow} alt="" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
};
