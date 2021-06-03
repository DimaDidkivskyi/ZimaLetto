import React, { useState } from "react";

import OrderImg from "../assets/img/order-logo.png";
import { Header, Footer, OrderForm } from "../components";

export const OrderRegistration = () => {
    const [success, setSuccess] = useState(false);

    return (
        <div className="order">
            {" "}
            <Header />
            <div className="container">
                <div className="order__inner">
                    <center>
                        {!success ? (
                            <>
                                <h1>Fill out the form bellow</h1>
                                <OrderForm setSuccess={setSuccess} />
                            </>
                        ) : (
                            <>
                                <h1 style={{ marginBottom: "50px" }}>
                                    Thanks for your order, we will contact you
                                    soon <icon>😊</icon>
                                </h1>
                                <img
                                    src={OrderImg}
                                    alt="img"
                                    style={{ width: 1170 }}
                                />
                            </>
                        )}
                    </center>
                </div>
            </div>
            <Footer />
        </div>
    );
};
