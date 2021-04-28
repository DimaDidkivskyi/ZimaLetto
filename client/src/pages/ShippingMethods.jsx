import React from "react";

export const ShippingMethods = () => {
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
            </div>
        </section>
    );
};
